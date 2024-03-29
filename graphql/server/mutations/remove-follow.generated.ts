import * as Types from '../types-server.generated';

import { FollowFragment } from '../server-fragments.generated';
import { useMutation, UseMutationOptions } from 'react-query';
import { useServerFetcher } from 'lib/clients/graphql';
export type RemoveFollowVariables = Types.Exact<{
  publicKey: Types.Scalars['String'];
}>;


export type RemoveFollow = { removeFollow: (
    Pick<Types.Follow, 'id' | 'createdAt' | 'updatedAt' | 'isFollowing'>
    & { user: Pick<Types.User, 'publicKey'>, followedUser: Pick<Types.User, 'publicKey'> }
  ) };


export const RemoveFollowDocument = /*#__PURE__*/ `
    mutation RemoveFollow($publicKey: String!) {
  removeFollow(followingPublicKey: $publicKey) {
    ...FollowFragment
  }
}
    ${FollowFragment}`;
export const useRemoveFollow = <
      TError = Error,
      TContext = unknown
    >(options?: UseMutationOptions<RemoveFollow, TError, RemoveFollowVariables, TContext>) =>
    useMutation<RemoveFollow, TError, RemoveFollowVariables, TContext>(
      ['RemoveFollow'],
      useServerFetcher<RemoveFollow, RemoveFollowVariables>(RemoveFollowDocument),
      options
    );