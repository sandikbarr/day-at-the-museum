'use server';

import { getClient, metSearchQuery, metObjectQuery, MetCollection, MetCollectionSearch, MetObject, MetCollectionObject  } from '@day-at-the-musuem/apollo-client/server';

export async function fetchMet(query: string, hasImages?: boolean, after?: number): Promise<MetCollectionSearch> {
  const metCollection = await getClient().query<MetCollection>({
    query: metSearchQuery,
    variables: {
      query,
      ...(hasImages !== null && hasImages !== undefined && { hasImages }),
      pageSize: 12,
      ...(after !== null && after !== undefined && { after }),
    },
  });
  return metCollection.data.metMuseumSearch;
}

export async function fetchMetObject(objectID: number): Promise<MetCollectionObject> {
  const metObject = await getClient().query<MetObject>({
    query: metObjectQuery,
    variables: {
      objectID
    }
  });
  return metObject.data.metMuseumObject;
}