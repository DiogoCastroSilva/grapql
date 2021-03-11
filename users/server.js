// Libraries
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

// Schemas
const schema = require('./schema/schema');


const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening at: http://localhost:4000');
});