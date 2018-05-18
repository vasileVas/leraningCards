const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const rootQueryType = require('./rootQueryType');
// const mutations = require('./mutations');

module.exports = new GraphQLSchema({
    query: rootQueryType
});
