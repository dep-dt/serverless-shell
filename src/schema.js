const { gql } = require('apollo-server-lambda');

exports.schema = gql`
  type Query {
    getRegisteredNumbers: String
  }
`;
