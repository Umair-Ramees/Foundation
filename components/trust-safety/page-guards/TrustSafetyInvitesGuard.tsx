import { useAccount } from 'wagmi';

import { ModerationStatus } from 'types/Moderation';

import useUserModerationState from 'hooks/queries/hasura/users/use-user-moderation-state';

import LoadingPage from 'components/LoadingPage';
import WarningBlock from '../WarningBlock';
import WarningTermsLink from '../WarningTermsLink';
import Page from 'components/Page';

interface TrustSafetyInvitesGuardProps {
  children: JSX.Element;
}

export default function TrustSafetyInvitesGuard(
  props: TrustSafetyInvitesGuardProps
): JSX.Element {
  const { children } = props;

  const [{ data: user }] = useAccount();

  const { isLoading, data: moderationData } = useUserModerationState({
    publicKey: user?.address,
  });

  const isUserModerated = moderationData?.isUserModerated;
  const moderationStatus = moderationData?.moderationStatus;

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isUserModerated && moderationStatus === ModerationStatus.UnderReview) {
    return (
      <Page title="Under Review">
        <WarningBlock
          title="Your profile is under review."
          description={
            <>
              Your profile is currently under review by the Foundation team, to
              ensure it has not broken the Foundation <WarningTermsLink />. You
              will not be able to invite any creators at this time.
            </>
          }
          icon={ModerationStatus.UnderReview}
        />
      </Page>
    );
  }

  if (isUserModerated && moderationStatus === ModerationStatus.Suspended) {
    return (
      <Page title="Permanently Removed">
        <WarningBlock
          title="Your profile has been permanently removed."
          description={
            <>
              Your profile has been found to be in violation of the Foundation{' '}
              <WarningTermsLink /> and permanently suspended. You can no longer
              invite any new creators.
            </>
          }
          icon={ModerationStatus.Suspended}
        />
      </Page>
    );
  }

  return children;
}
