import { CollectionFragmentExtended } from 'graphql/hasura/hasura-fragments.generated';

export enum ContractType {
  FND = 'FND',
  IMPORTED = 'IMPORTED',
  FND_COLLECTION = 'FND_COLLECTION',
  SHARED = 'SHARED',
}

export type CollectionCardFragment = Pick<
  CollectionFragmentExtended,
  | 'symbol'
  | 'collectionImageUrl'
  | 'contractAddress'
  | 'slug'
  | 'coverImageUrl'
  | 'name'
  | 'moderationStatus'
>;
