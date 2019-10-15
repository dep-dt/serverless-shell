exports.resolvers = {
  Query: {
    getRegisteredNumbers: (root, args, { dataSources }) =>
      dataSources.organicAPI.getRegisteredNumbers(),
  },
};
