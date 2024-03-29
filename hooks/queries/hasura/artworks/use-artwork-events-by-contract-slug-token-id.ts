import { useQuery, UseQueryOptions } from 'react-query';

import {
  ArtworkEventsByContractSlugTokenIdDocument,
  ArtworkEventsByContractSlugTokenIdVariables,
  useArtworkEventsByContractSlugTokenId as useArtworkEventsByContractSlugTokenIdBaseHook,
} from 'graphql/hasura/queries/artwork-events-by-contract-slug-token-id.generated';

import { ArtworkEvent } from 'types/Event';
import { hasuraFetcher } from 'lib/clients/graphql';
import { isAllTrue, isNumber } from 'utils/helpers';

export type ArtworkEventsByContractSlugTokenId = {
  events: ArtworkEvent[];
};

export default function useArtworkEventsByContractSlugTokenId(
  variables: ArtworkEventsByContractSlugTokenIdVariables,
  options?: UseQueryOptions<ArtworkEventsByContractSlugTokenId, Error>
) {
  return useQuery<ArtworkEventsByContractSlugTokenId, Error>(
    useArtworkEventsByContractSlugTokenIdBaseHook.getKey(variables),
    hasuraFetcher<
      ArtworkEventsByContractSlugTokenId,
      ArtworkEventsByContractSlugTokenIdVariables
    >(ArtworkEventsByContractSlugTokenIdDocument, variables),
    {
      enabled: isAllTrue([variables.contractSlug, isNumber(variables.tokenId)]),
      ...options,
    }
  );
}
