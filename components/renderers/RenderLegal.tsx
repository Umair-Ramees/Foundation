import Box from 'components/base/Box';
import { H1Heading, H2Heading, H3Heading } from 'components/base/Heading';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Paragraph from 'components/base/Paragraph';

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <H1Heading
        size={{ '@initial': 5, '@bp1': 6 }}
        css={{
          marginTop: '$7',
          marginBottom: '$6',
          '@bp0': {
            marginTop: '$8',
          },
        }}
      >
        {children}
      </H1Heading>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <H2Heading
        size={{ '@initial': 4, '@bp1': 5 }}
        css={{
          marginTop: '$7',
          marginBottom: '$6',
          '@bp0': {
            marginTop: '$8',
          },
        }}
      >
        {children}
      </H2Heading>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <H3Heading
        size={{ '@initial': 3, '@bp1': 4 }}
        css={{
          marginTop: '$7',
          marginBottom: '$6',
          '@bp0': {
            marginTop: '$8',
          },
        }}
      >
        {children}
      </H3Heading>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Paragraph
        as="p"
        css={{
          color: '$black100',
          marginBottom: '$6',
          '& li': {
            listStyle: 'disc',
            marginBottom: '$4',
            marginLeft: '$6',
          },
          '& a': {
            color: 'currentColor',
            textDecoration: 'none',
            borderBottom: '1px solid $black10',
            transition: 'color $1 $ease',
            '&:hover': {
              borderBottomColor: '$black100',
            },
            '& u': {
              textDecoration: 'none',
            },
          },
        }}
      >
        {children}
      </Paragraph>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <Box as="ul" css={{ marginBottom: '$7' }}>
        {children}
      </Box>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <Box
        as="li"
        css={{
          listStyle: 'disc',
          marginBottom: '$4',
          marginLeft: '$6',
          '& > p': { marginBottom: 0 },
        }}
      >
        {children}
      </Box>
    ),
  },
};

export default function RenderLegal(doc) {
  return documentToReactComponents(doc, options);
}
