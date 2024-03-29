import TransactionProgressPane from 'components/transactions/generic/TransactionProgressPane';
import TransactionActionButtons from '../generic/TransactionActionButtons';

import { ArtworkFragmentExtended } from 'graphql/hasura/hasura-fragments.generated';

import { buildArtworkPath, buildArtworkTagsPath } from 'utils/artwork/artwork';
import { buildCollectionPath, isFNDContractAddress } from 'utils/collections';

interface MintTransactionSuccessProps {
  artwork: ArtworkFragmentExtended;
}

export default function MintTransactionSuccess(
  props: MintTransactionSuccessProps
) {
  const { artwork } = props;

  const artworkPath = buildArtworkPath({ artwork, user: artwork.creator });

  const collectionPath = buildCollectionPath(artwork?.collection);

  const isFNDCollection = isFNDContractAddress(
    artwork?.collection?.contractAddress
  );

  return (
    <TransactionProgressPane
      title="Your NFT has been minted!"
      description="Congratulations! Your NFT has officially been minted on the Ethereum blockchain."
      status="success"
      meta={
        isFNDCollection ? (
          <TransactionActionButtons
            buttons={[
              { href: buildArtworkTagsPath(artwork), label: 'Add tags' },
              { href: artworkPath, label: 'View NFT' },
            ]}
          />
        ) : (
          <TransactionActionButtons
            buttons={[
              { href: buildArtworkTagsPath(artwork), label: 'Add tags' },
              { href: collectionPath, label: 'View collection' },
            ]}
          />
        )
      }
      fireConfetti={true}
    />
  );
}
