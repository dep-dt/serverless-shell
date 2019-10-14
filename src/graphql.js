// graphql.js
const { OrganicAPI } = require('./datasource.js');
const { ApolloServer, gql } = require('apollo-server-lambda');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    getRegisteredNumbers: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    getRegisteredNumbers: (root, args, { dataSources }) =>
      dataSources.organicAPI.getRegisteredNumbers(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    organicAPI: new OrganicAPI(),
  }),
});

exports.graphqlHandler = server.createHandler();
