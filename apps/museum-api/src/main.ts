import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { MetAPI } from './datasources/met-api'

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server
      return {
        dataSources: {
          metAPI: new MetAPI({cache}),
        }
      }
    }
  });

  console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
}

startApolloServer();
