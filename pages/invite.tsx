import { length, filter, compose } from 'ramda';
import { useAccount } from 'wagmi';

import Grid from 'components/base/Grid';
import Flex from 'components/base/Flex';
import Heading from 'components/base/Heading';
import Text from 'components/base/Text';
import Body from 'components/base/Body';
import Paragraph from 'components/base/Paragraph';
import Page, { PageProps } from 'components/Page';
import SpinnerStroked from 'components/SpinnerStroked';
import InviteCodeRow from 'components/invites/InviteCodeRow';
import WalletAuthBlock from 'components/auth/WalletAuthBlock';
import LoadingPage from 'components/LoadingPage';
import TrustSafetyInvitesGuard from 'components/trust-safety/page-guards/TrustSafetyInvitesGuard';

import { useInviteCodes } from 'graphql/server/queries/invite-codes.generated';
import { InviteCodeFragment } from 'graphql/server/server-fragments.generated';

import useAuthToken from 'hooks/queries/use-auth-token';
import useModal from 'hooks/use-modal';

import { isAllTrue } from 'utils/helpers';

import { ModalKey } from 'types/modal';

export default function Invite(): JSX.Element {
  const { setCurrentModal } = useModal();
  const [{ data: user, loading: isUserLoading }] = useAccount();
  const { data: authToken, isLoading: isAuthTokenLoading } = useAuthToken({
    onError: () => {
      setCurrentModal(ModalKey.AUTH_MAIN);
    },
  });

  const { data, isLoading: loading } = useInviteCodes(null, {
    enabled: isAllTrue([user, authToken]),
  });

  const pageProps: PageProps = {
    title: 'Invite a Creator',
    footerCss: { display: 'none' },
  };

  if (isUserLoading || isAuthTokenLoading) {
    return <LoadingPage />;
  }

  if (!user || isUserLoading) {
    return <WalletAuthBlock pageProps={{ ...pageProps, absolute: true }} />;
  }

  return (
    <TrustSafetyInvitesGuard>
      <Page {...pageProps}>
        <Body
          css={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 640,
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            paddingBottom: '$9',
            paddingTop: '$6',
            '@bp0': {
              paddingTop: '$8',
            },
          }}
        >
          <Grid css={{ gap: '$4', marginBottom: '$7' }}>
            <Heading size={5} css={{ textAlign: 'center' }}>
              Invite a Creator
            </Heading>
            <Paragraph
              css={{ maxWidth: 300, marginX: 'auto', textAlign: 'center' }}
            >
              Copy an invite URL and share it with a creator to give them access
              to Foundation’s creator tools.
            </Paragraph>
          </Grid>
          <Grid css={{ gap: '$8' }}>
            <RenderInviteCodes
              isLoading={loading}
              inviteCodes={data?.myInviteCodes}
            />
          </Grid>
        </Body>
      </Page>
    </TrustSafetyInvitesGuard>
  );
}

interface RenderInviteCodesProps {
  isLoading: boolean;
  inviteCodes: InviteCodeFragment[];
}

const getInviteCount = compose<
  InviteCodeFragment[],
  InviteCodeFragment[],
  number
>(
  length,
  filter<InviteCodeFragment>((invite) => invite.redeemedAt === null)
);

function RenderInviteCodes(props: RenderInviteCodesProps): JSX.Element {
  const { isLoading, inviteCodes = [] } = props;

  const sortedInviteCodes = [...inviteCodes].sort((a, b) => {
    return Boolean(a.redeemedAt) === Boolean(b.redeemedAt)
      ? 0
      : a.redeemedAt
      ? 1
      : -1;
  });

  if (isLoading) {
    return (
      <Flex css={{ justifyContent: 'center' }}>
        <SpinnerStroked size={48} />
      </Flex>
    );
  }

  const inviteCount = getInviteCount(inviteCodes);
  const totalInviteCount = length(inviteCodes);

  return (
    <Grid css={{ gap: '$8' }}>
      <Text size={2} weight="semibold" css={{ textAlign: 'center' }}>
        {inviteCount}/{totalInviteCount} Invites Available
      </Text>
      <Grid css={{ gap: 10 }}>
        {sortedInviteCodes.map((inviteCode, index) => (
          <InviteCodeRow
            inviteCode={inviteCode}
            css={{ zIndex: index }}
            key={index}
          />
        ))}
      </Grid>
    </Grid>
  );
}
