import { GraphQLError } from 'graphql/error/GraphQLError';
import { paginateResults } from './utils';

export const resolvers = {
  Query: {
    metMuseumSearch: async (
      _,
      {
        query,
        hasImages,
        pageSize = 20,
        after,
      }: {
        query: string;
        hasImages?: boolean;
        pageSize?: number;
        after?: number;
      },
      { dataSources }
    ) => {
      if (!query) {
        // throw new Error('query param is required');
        throw new GraphQLError('query param is required', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        });
      }
      const allObjects = await dataSources.metAPI.searchObjects(
        query,
        hasImages
      );
      const objects = paginateResults({
        after,
        pageSize,
        results: allObjects.objectIDs.map((objectID) => ({
          objectID,
          cursor: objectID,
        })),
      });
      return {
        objects,
        cursor: objects.length ? objects[objects.length - 1].cursor : null,
        hasMore: objects.length
          ? objects[objects.length - 1].cursor !==
            allObjects.objectIDs[allObjects.objectIDs.length - 1].cursor
          : false,
      };
    },
    metMuseumObject: async (_, { objectID }: { objectID: number }) => {
      return {
        objectID,
      };
    },
  },

  MetMuseumObject: {
    object: ({ objectID }, _, { dataSources }) => {
      return dataSources.metAPI.getObject(objectID);
    },
  },
};
