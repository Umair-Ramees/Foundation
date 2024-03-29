import { styled } from 'stitches.config';
import ReactMarkdown from 'react-markdown';
import Box from 'components/base/Box';

const ParagraphWrapper = styled(Box, {
  fontFamily: '$body',
  fontSize: '$2',
  lineHeight: '1.4',
  marginY: '$5',
  zIndex: 1,
  position: 'relative',
  '@bp1': {
    fontSize: '$3',
  },
  a: {
    color: '$black100',
    fontFamily: '$body',
    textDecoration: 'none',
    borderBottom: '1px solid $black10',
    transition: 'color $1 $ease, border-bottom $ease',
    '@hover': {
      '&:hover': {
        color: '$blue100',
        borderBottomColor: '$blue100',
      },
    },
  },
  p: {
    marginBottom: '$5',
  },
  'p:only-child': {
    marginBottom: 0,
  },
  'p:last-child': {
    marginBottom: 0,
  },
});

interface ParagraphProps {
  children: string;
}

export default function Paragraph(props: ParagraphProps): JSX.Element {
  const { children } = props;
  return (
    <ParagraphWrapper>
      <ReactMarkdown>{children}</ReactMarkdown>
    </ParagraphWrapper>
  );
}
