const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const DeckType = new GraphQLObjectType({
    name: 'DeckType',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString }
    })
});

module.exports = DeckType;
