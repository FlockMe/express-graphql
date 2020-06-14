const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');

const schema = buildSchema(`
  type Query {
   hello: String
 }
`);

const root =  {
  hello: () => {
    return 'Hello watsup broh.';
 },
};

const app = express();

app.use('/graphql', graphqlHTTP({
schema: schema,
rootValue: root,
graphiql: true,
}));

let listener = app.listen(process.env.PORT, function() {
 console.log(`Listening port on ${listener.address().port}`);
});
