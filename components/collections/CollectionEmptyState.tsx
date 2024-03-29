import Flex from 'components/base/Flex';
import Paragraph from 'components/base/Paragraph';
import Text from 'components/base/Text';

interface CollectionEmptyStateProps {
  isEmptyCollection: boolean;
}

export default function CollectionEmptyState(
  props: CollectionEmptyStateProps
): JSX.Element {
  const { isEmptyCollection } = props;

  return (
    <Flex css={{ paddingY: '$5', minHeight: 200 }} center expandVertical>
      <Text
        size={4}
        weight="semibold"
        css={{ textAlign: 'center', marginBottom: '$3' }}
      >
        Nothing to see here.
      </Text>
      {isEmptyCollection ? (
        <Paragraph css={{ textAlign: 'center', marginX: 'auto' }}>
          Come back later to see new works in the collection.
        </Paragraph>
      ) : (
        <Paragraph css={{ textAlign: 'center', marginX: 'auto' }}>
          Select another filter to show new results.
        </Paragraph>
      )}
    </Flex>
  );
}
