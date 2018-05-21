const express = require('express');
const models = require('./models/models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

app.use(cors());

const MONGO_URL = 'mongodb://radu:radu@ds227740.mlab.com:27740/learning-cards';
if (!MONGO_URL) {
    throw new Error('You must provide a MongoLab URL');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab Instance'))
    .on('error', error =>
        console.log('Connection to MongolLab failed:', error)
    );

app.use(bodyParser.json());
app.use(
    '/graphql',
    expressGraphQL({
        schema,
        graphiql: true
    })
);

app.listen(4000, () => {
    console.log('Listening on 4000');
});
