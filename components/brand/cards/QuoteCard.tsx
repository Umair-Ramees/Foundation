import { styled } from 'stitches.config';

import Flex from 'components/base/Flex';
import Box from 'components/base/Box';
import UserTag from 'components/users/UserTag';
import useUserByPublicKey from 'hooks/queries/hasura/users/use-user-by-public-key';

interface QuoteCardProps {
  name: string;
  text: string;
  publicKey: string;
}

const QuoteCardBox = styled(Flex, {
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '$3',
  width: '100%',
  boxShadow: '$0',
  padding: '$7',
  position: 'relative',
  background: '#fff',
});

const Name = styled('h3', {
  fontFamily: '$body',
  fontSize: '$3',
  whiteSpace: 'nowrap',
  '@bp1': {
    transform: 'translateX(-100%) rotate(-90deg)',
    transformOrigin: 'right top',
    display: 'inline',
    width: 'fit-content',
    zIndex: 1,
  },
});

const Paragraph = styled('p', {
  fontFamily: '$body',
  fontSize: '$0',
  lineHeight: 1.6,
  marginTop: '$3',
  marginBottom: '$7',
  '@bp1': {
    fontSize: '$2',
    marginLeft: '$8',
  },
});

export default function QuoteCard(props: QuoteCardProps): JSX.Element {
  const { name, text, publicKey } = props;

  const { data } = useUserByPublicKey(
    { publicKey: publicKey },
    { refetchOnWindowFocus: false }
  );
  const user = data?.user;

  return (
    <QuoteCardBox>
      <Name>{name}</Name>
      <Paragraph>{text}</Paragraph>
      <Box css={{ alignSelf: 'flex-end' }}>
        <UserTag user={user} />
      </Box>
    </QuoteCardBox>
  );
}
