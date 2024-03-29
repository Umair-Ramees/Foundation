import { reverse } from 'ramda';

import CircleAvatar from 'components/avatars/CircleAvatar';
import Box from 'components/base/Box';
import Flex from 'components/base/Flex';

import { UserLight } from 'types/Account';

interface UserStackV2Props {
  users: UserLight[];
}

export default function UserStackV2(props: UserStackV2Props): JSX.Element {
  const { users } = props;

  // reverse users because we’re re-reversing them with flexbox
  // this is so we can reverse stacking context
  const reversedUsers = reverse(users);

  return (
    <Flex css={{ flexDirection: 'row-reverse', paddingRight: '$3' }}>
      {reversedUsers.map((user) => (
        <Box key={user.publicKey} css={{ marginRight: '-$3' }}>
          <CircleAvatar
            publicKey={user.publicKey}
            imageUrl={user.profileImageUrl}
            maxSize={34}
            css={{ width: 34, height: 34 }}
          />
        </Box>
      ))}
    </Flex>
  );
}
