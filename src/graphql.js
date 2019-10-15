const { OrganicAPI } = require('./datasource.js');
const { ApolloServer, gql } = require('apollo-server-lambda');
const { resolvers } = require('./resolvers.js');
const { schema } = require('./schema.js');

// Construct a schema, using GraphQL schema language
const typeDefs = schema;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    organicAPI: new OrganicAPI(),
  }),
});

exports.graphqlHandler = server.createHandler();
