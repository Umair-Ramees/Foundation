import { ReactNode } from 'react';
import { cond, equals } from 'ramda';

import Box from 'components/base/Box';
import Flex from 'components/base/Flex';
import Icon from 'components/Icon';
import TransitionPane from 'components/animation/TransitionPane';
import { TransactionCard } from 'components/layouts/TransactionLayoutV2';
import TransactionParagraph from '../TransactionParagraph';
import Heading from 'components/base/Heading';
import SpinnerStroked from 'components/SpinnerStroked';
import ConfettiCanvas from 'components/ConfettiCanvas';

import SuccessIcon from 'assets/icons/success-icon.svg';
import ErrorIcon from 'assets/icons/error-icon.svg';
import VerifiedBadge from 'assets/icons/verified-badge.svg';
import WarningIcon from 'assets/icons/tx-error.svg';

type TransactionType = 'pending' | 'success' | 'error' | 'verify' | 'warning';

interface TransactionProgressPaneProps {
  title: ReactNode;
  description: ReactNode;
  meta: ReactNode;
  status: TransactionType;
  fireConfetti?: boolean;
}

export default function TransactionProgressPane(
  props: TransactionProgressPaneProps
) {
  const { title, description, meta, fireConfetti = false, status } = props;

  return (
    <TransitionPane>
      <ConfettiCanvas fireConfetti={fireConfetti} />
      <TransactionCard
        css={{
          alignItems: 'flex-start',
          flexGrow: 1,
        }}
      >
        <Box css={{ marginBottom: '$6', color: '$black100' }}>
          {/* render different icons based on the transaction status */}
          {TransactionIcon(status)}
        </Box>

        <Heading
          size={{ '@initial': 2, '@bp2': 4 }}
          css={{ marginBottom: '$5' }}
        >
          {title}
        </Heading>
        <TransactionParagraph css={{ marginBottom: '$7' }}>
          {description}
        </TransactionParagraph>
        <Flex css={{ marginTop: 'auto', width: '100%' }}>{meta}</Flex>
      </TransactionCard>
    </TransitionPane>
  );
}

const TransactionIcon = cond<TransactionType, JSX.Element>([
  [equals('error'), () => <Icon width={50} height={50} icon={ErrorIcon} />],
  [equals('pending'), () => <SpinnerStroked size={32} />],
  [equals('success'), () => <Icon width={50} height={50} icon={SuccessIcon} />],
  [
    equals('verify'),
    () => <Icon width={50} height={50} icon={VerifiedBadge} />,
  ],
  [equals('warning'), () => <Icon width={50} height={50} icon={WarningIcon} />],
]);
