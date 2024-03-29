import {
  compose,
  paths,
  reject,
  uniqBy,
  isNil,
  identity,
  map,
  flatten,
  head,
  cond,
  T,
  split,
  sort,
  assocPath,
} from 'ramda';

import { AuctionWithBids } from 'types/Auction';

import { maybeGetAddress } from './users';
import { isAuctionEnded, isAuctionLive } from './auctions/auctions';
import { isAllTrue } from './helpers';
import { ArtworkEvent, EventType } from 'types/Event';
import { parseDateToUnix } from './dates/dates';

export const isBidEventAfterAuctionClose = (
  eventType: EventType,
  unixDateEnding: number
): boolean => {
  // is the history event a bid
  const isBidEvent = eventType === EventType.Bid;
  // if the auction has ended
  const hasAuctionEnded = !isAuctionLive(unixDateEnding);
  // return true when all values are true

  return isAllTrue([isBidEvent, hasAuctionEnded]);
};

// an array of the paths where public keys exist on NftHistory
const getHistoryPublicKeyPaths = paths<string>([
  ['actorAccount', 'id'],
  ['nftRecipient', 'id'],
]);

export const getHistoryPublicKeys = compose(
  reject(isNil),
  // make sure only unique values
  uniqBy(identity),
  //  checksum each addresss
  map(maybeGetAddress),
  // flatten the arrays of arrays
  flatten,
  // map over the histories and get the keys
  map(getHistoryPublicKeyPaths)
);

const isBidEventAfterAuctionEnd = (
  event: ArtworkEvent,
  auction: AuctionWithBids
) =>
  isAllTrue([
    // is the most recent event a bid?
    event?.eventType === EventType.Bid,
    // has the auction ended?
    isAuctionEnded(parseDateToUnix(auction?.endsAt)),
  ]);

export const sortEventsByLogIndex = sort<ArtworkEvent>((a, b) => {
  return a.blockTimestamp === b.blockTimestamp
    ? getLogIndex(b) - getLogIndex(a)
    : parseDateToUnix(b.blockTimestamp) - parseDateToUnix(a.blockTimestamp);
});

const getLogIndex = (event: ArtworkEvent) => {
  // event.id would be 0xbeef-18-Bid
  const [, logIndex] = split('-', event.id);
  return Number(logIndex);
};

// make sure we only have SOLD | BUY_NOW_ACCEPTED | OFFER_ACCEPTED events with a unique blockTimestamp value
export const removeDuplicateSaleEvents = uniqBy<ArtworkEvent, string | false>(
  (ev) =>
    [
      EventType.OfferAccepted,
      EventType.Sold,
      EventType.BuyNowPriceAccepted,
    ].includes(ev.eventType)
      ? ev.blockTimestamp
      : ev.id
);

export const assignSoldEventToSettle = (events: ArtworkEvent[]) =>
  map<ArtworkEvent, ArtworkEvent>((ev) => {
    return ev.eventType === EventType.Sold ? assignSoldEvent(ev, events) : ev;
  }, events);

const assignSoldEvent = (
  soldEvent: ArtworkEvent,
  events: ArtworkEvent[]
): ArtworkEvent => {
  const settleEvent = events.find(
    (ev) =>
      Number(ev.data.dateEnding) === Number(soldEvent.data.dateEnding) &&
      ev.eventType === EventType.Settled
  );

  return settleEvent
    ? compose<ArtworkEvent, ArtworkEvent, ArtworkEvent>(
        // assign the user from the settle event
        assocPath(['settleUser'], settleEvent.user),
        // assign the transaction hash from the settle event
        assocPath(['data', 'transactionHash'], settleEvent.data.transactionHash)
      )(soldEvent)
    : soldEvent;
};

export const transformProvenanceEvents = compose<
  ArtworkEvent[],
  ArtworkEvent[],
  ArtworkEvent[]
>(assignSoldEventToSettle, removeDuplicateSaleEvents);

export function getArtworkHistory(
  events: ArtworkEvent[],
  auction: AuctionWithBids
) {
  const mostRecentEvent = head(events);

  const sortedEvents = sortEventsByLogIndex(events);

  const soldEvent: ArtworkEvent = {
    ...mostRecentEvent,
    eventType: EventType.Sold,
    blockTimestamp: auction?.endsAt,
  };

  return cond<ArtworkEvent, ArtworkEvent[]>([
    // if the auction has ended and most recent event is a bid
    [
      (event) => isBidEventAfterAuctionEnd(event, auction),
      // prepend the sold event to the stack
      () => transformProvenanceEvents([soldEvent, ...sortedEvents]),
    ],
    // otherwise return the events
    [T, () => transformProvenanceEvents(sortedEvents)],
  ])(mostRecentEvent);
}
