const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = new Schema({
    title: { type: String },
    description: { type: String }
});

mongoose.model('deck', DeckSchema);
