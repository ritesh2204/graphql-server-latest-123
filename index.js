const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs, // typeDefs: gql`${fs.readFileSync('./schema.graphql', 'utf-8')}`,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
