import ReactMarkdown from 'react-markdown';

import ArtworkAuthenticity from './ArtworkAuthenticity';
import ArtworkTags from './ArtworkTags';
import Grid from 'components/base/Grid';
import Box from 'components/base/Box';
import Heading from 'components/base/Heading';
import Text from 'components/base/Text';

import { ArtworkPageArtwork } from 'queries/server/artwork-page';

import { BasicArtwork } from 'types/Artwork';
import { Attributes } from 'components/modals/v2/CollectionAttributeModal';

import { notEmptyOrNil } from 'utils/helpers';
import { areKeysEqual } from 'utils/users';
import Flex from 'components/base/Flex';

interface ArtworkMetaProps {
  description: string;
  artwork: BasicArtwork;
  creatorPublicKey: string;
  currentUserPublicKey: string;
  tags?: string[];
  collection: ArtworkPageArtwork['collection'];
  artworkAttributes: Attributes[];
  totalArtworks: number;
}

export default function ArtworkMeta(props: ArtworkMetaProps): JSX.Element {
  const {
    description,
    artwork,
    creatorPublicKey,
    currentUserPublicKey,
    tags,
    collection,
    artworkAttributes,
    totalArtworks,
  } = props;

  const hasDescription = notEmptyOrNil(description);
  const hasTags = notEmptyOrNil(tags);
  const hasAttributes = notEmptyOrNil(artworkAttributes);

  const isCurrentUserProfile = areKeysEqual([
    creatorPublicKey,
    currentUserPublicKey,
  ]);

  console.log(artworkAttributes);

  return (
    <Grid css={{ gridGap: '$6', '@bp1': { gridGap: '$8' } }}>
      {hasDescription && (
        <Box>
          <Heading
            size={{ '@initial': 2, '@bp0': 3 }}
            css={{
              marginBottom: '$5',
              borderBottom: '1px solid $black10',
              paddingBottom: '$5',
            }}
          >
            Description
          </Heading>
          <Text
            size={1}
            css={{
              wordBreak: 'break-word',
              lineHeight: 1.6,
              maxWidth: '33rem',
              '& > p:not(:last-of-type)': {
                marginBottom: '$5',
              },
              '& > ol': {
                listStylePosition: 'inside',
              },
              '& pre': {
                whiteSpace: 'normal',
              },
              '& code': {
                whiteSpace: 'normal',
              },
              a: {
                color: 'inherit',
              },
            }}
          >
            <ReactMarkdown plugins={[require('remark-breaks')]}>
              {description}
            </ReactMarkdown>
          </Text>
        </Box>
      )}

      {hasAttributes && (
        <Box>
          <Heading
            size={{ '@initial': 2, '@bp0': 3 }}
            css={{ marginBottom: '$5' }}
          >
            Attributes
          </Heading>
          <Flex css={{ flexWrap: 'wrap', gap: '$4' }}>
            {artworkAttributes.flatMap((attribute, index) => (
              <Box
                key={index}
                css={{
                  padding: '$3',
                  border: 'solid 1px $black10',
                  borderRadius: '$2',
                }}
              >
                {attribute.attributes.map((attr) => (
                  <Box key={attr.value}>
                    <Heading size={0} css={{ color: '$black60' }}>
                      {attribute.category}
                    </Heading>
                    <Heading css={{ paddingY: 2 }}>{attr.label}</Heading>
                    <Text css={{ fontSize: 12, color: '$black60' }}>
                      {/* TODO: abstract into helper function */}
                      {((attr.count / totalArtworks) * 100).toFixed(2)}%
                    </Text>
                  </Box>
                ))}
              </Box>
            ))}
          </Flex>
        </Box>
      )}

      <Box>
        <ArtworkAuthenticity artwork={artwork} collection={collection} />
      </Box>
      {hasTags && (
        <ArtworkTags
          artwork={artwork}
          tags={tags}
          isCurrentUserProfile={isCurrentUserProfile}
        />
      )}
    </Grid>
  );
}
