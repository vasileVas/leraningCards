const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLList, GraphQLObjectType } = graphql;
const DeckType = require('./_deck_type');
const Deck = mongoose.model('deck');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        decks: {
            type: new GraphQLList(DeckType),
            resolve: () => Deck.find({})
        }
    })
});

module.exports = RootQuery;
