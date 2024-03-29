import * as Types from './types-server.generated';

export type ArtworkFragment = Pick<Types.Artwork, 'id' | 'name' | 'description' | 'assetScheme' | 'assetHost' | 'assetPath' | 'assetIPFSPath' | 'metadataScheme' | 'metadataHost' | 'metadataPath' | 'metadataIPFSPath' | 'mintTxHash' | 'auctionStartTxHash' | 'width' | 'height' | 'duration' | 'mimeType' | 'tokenId' | 'status' | 'hiddenAt' | 'deletedAt' | 'moderationStatus'>;

export type ArtworkFragmentPrivate = Pick<Types.Artwork, 'downloadableUrl' | 'id' | 'name' | 'description' | 'assetScheme' | 'assetHost' | 'assetPath' | 'assetIPFSPath' | 'metadataScheme' | 'metadataHost' | 'metadataPath' | 'metadataIPFSPath' | 'mintTxHash' | 'auctionStartTxHash' | 'width' | 'height' | 'duration' | 'mimeType' | 'tokenId' | 'status' | 'hiddenAt' | 'deletedAt' | 'moderationStatus'>;

export type UserFragmentLight = Pick<Types.User, 'userIndex' | 'publicKey' | 'username' | 'profileImageUrl' | 'coverImageUrl' | 'name' | 'bio' | 'isApprovedCreator' | 'moderationStatus'>;

export type UserFragment = (
  Pick<Types.User, 'userIndex' | 'publicKey' | 'username' | 'name' | 'firstName' | 'lastName' | 'isAdmin' | 'providerType' | 'bio' | 'coverImageUrl' | 'profileImageUrl' | 'isApprovedCreator' | 'moderationStatus'>
  & { links?: Types.Maybe<{ website?: Types.Maybe<Pick<Types.SocialLink, 'platform' | 'handle'>>, instagram?: Types.Maybe<Pick<Types.SocialLink, 'platform' | 'handle'>>, twitter?: Types.Maybe<Pick<Types.SocialLink, 'platform' | 'handle'>>, youtube?: Types.Maybe<Pick<Types.SocialLink, 'platform' | 'handle'>>, facebook?: Types.Maybe<Pick<Types.SocialLink, 'platform' | 'handle'>>, twitch?: Types.Maybe<Pick<Types.SocialLink, 'platform' | 'handle'>>, tiktok?: Types.Maybe<Pick<Types.SocialLink, 'platform' | 'handle'>>, discord?: Types.Maybe<Pick<Types.SocialLink, 'platform' | 'handle'>>, snapchat?: Types.Maybe<Pick<Types.SocialLink, 'platform' | 'handle'>> }> }
);

export type InviteCodeFragment = Pick<Types.InviteCode, 'inviteCode' | 'createdAt' | 'updatedAt' | 'redeemedAt'>;

export type SocialVerificationFragment = Pick<Types.SocialVerification, 'id' | 'createdAt' | 'updatedAt' | 'lastCheckedAt' | 'socialVerificationURL' | 'verificationText' | 'userId' | 'username' | 'isValid' | 'service' | 'status'>;

export type FollowFragment = (
  Pick<Types.Follow, 'id' | 'createdAt' | 'updatedAt' | 'isFollowing'>
  & { user: Pick<Types.User, 'publicKey'>, followedUser: Pick<Types.User, 'publicKey'> }
);

export type ArtworkUserVisibilityFragment = Pick<Types.ArtworkUserVisibility, 'id' | 'hiddenAt' | 'createdAt' | 'updatedAt'>;

export type PrivateSaleFragment = Pick<Types.PrivateSale, 'personalMessage' | 'signature'>;

export type CollectionFragment = Pick<Types.Collection, 'id' | 'contractAddress' | 'symbol' | 'name' | 'slug' | 'description' | 'collectionImageUrl' | 'coverImageUrl' | 'createdAt' | 'updatedAt'>;

export const ArtworkFragment = /*#__PURE__*/ `
    fragment ArtworkFragment on Artwork {
  id
  name
  description
  assetScheme
  assetHost
  assetPath
  assetIPFSPath
  metadataScheme
  metadataHost
  metadataPath
  metadataIPFSPath
  mintTxHash
  auctionStartTxHash
  width
  height
  duration
  mimeType
  tokenId
  status
  hiddenAt
  deletedAt
  moderationStatus
}
    `;
export const ArtworkFragmentPrivate = /*#__PURE__*/ `
    fragment ArtworkFragmentPrivate on Artwork {
  ...ArtworkFragment
  downloadableUrl
}
    ${ArtworkFragment}`;
export const UserFragmentLight = /*#__PURE__*/ `
    fragment UserFragmentLight on User {
  userIndex
  publicKey
  username
  profileImageUrl
  coverImageUrl
  name
  bio
  isApprovedCreator
  moderationStatus
}
    `;
export const UserFragment = /*#__PURE__*/ `
    fragment UserFragment on User {
  userIndex
  publicKey
  username
  name
  firstName
  lastName
  isAdmin
  providerType
  bio
  coverImageUrl
  profileImageUrl
  isApprovedCreator
  moderationStatus
  links {
    website {
      platform
      handle
    }
    instagram {
      platform
      handle
    }
    twitter {
      platform
      handle
    }
    youtube {
      platform
      handle
    }
    facebook {
      platform
      handle
    }
    twitch {
      platform
      handle
    }
    tiktok {
      platform
      handle
    }
    discord {
      platform
      handle
    }
    snapchat {
      platform
      handle
    }
  }
}
    `;
export const InviteCodeFragment = /*#__PURE__*/ `
    fragment InviteCodeFragment on InviteCode {
  inviteCode
  createdAt
  updatedAt
  redeemedAt
}
    `;
export const SocialVerificationFragment = /*#__PURE__*/ `
    fragment SocialVerificationFragment on SocialVerification {
  id
  createdAt
  updatedAt
  lastCheckedAt
  socialVerificationURL
  verificationText
  userId
  username
  isValid
  service
  status
}
    `;
export const FollowFragment = /*#__PURE__*/ `
    fragment FollowFragment on Follow {
  id
  createdAt
  updatedAt
  user {
    publicKey
  }
  followedUser {
    publicKey
  }
  isFollowing
}
    `;
export const ArtworkUserVisibilityFragment = /*#__PURE__*/ `
    fragment ArtworkUserVisibilityFragment on ArtworkUserVisibility {
  id
  hiddenAt
  createdAt
  updatedAt
}
    `;
export const PrivateSaleFragment = /*#__PURE__*/ `
    fragment PrivateSaleFragment on PrivateSale {
  personalMessage
  signature
}
    `;
export const CollectionFragment = /*#__PURE__*/ `
    fragment CollectionFragment on Collection {
  id
  contractAddress
  symbol
  name
  slug
  description
  collectionImageUrl
  coverImageUrl
  createdAt
  updatedAt
}
    `;