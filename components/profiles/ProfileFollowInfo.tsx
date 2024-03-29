import { useAccount } from 'wagmi';

import ProfileFollowState from './ProfileFollowState';
import ProfileMutualFollows from './ProfileMutualFollows';

import { UserFollowState } from 'graphql/hasura/queries/user-follow-state.generated';
import useUserFollowState from 'hooks/queries/hasura/users/use-user-follow-state';

import { isAllTrue } from 'utils/helpers';

interface ProfileFollowInfoProps {
  publicKey: string;
  userFollowState: UserFollowState['user'];
}

export default function ProfileFollowInfo(
  props: ProfileFollowInfoProps
): JSX.Element {
  const { publicKey, userFollowState } = props;

  const [{ data: user, loading: isUserLoading }] = useAccount();

  const currentUserPublicKey = user?.address;

  const { data: userFollowData } = useUserFollowState(
    { publicKey, currentUserPublicKey },
    {
      enabled: isAllTrue([!isUserLoading]),
      initialData: { user: userFollowState },
    }
  );

  return (
    <>
      <ProfileFollowState
        publicKey={publicKey}
        currentUserPublicKey={currentUserPublicKey}
        userFollowState={userFollowData}
      />
      <ProfileMutualFollows
        isQueryEnabled={isAllTrue([publicKey, !isUserLoading])}
        publicKey={publicKey}
        currentUserPublicKey={currentUserPublicKey}
        followerCount={userFollowData?.followerCount}
      />
    </>
  );
}
