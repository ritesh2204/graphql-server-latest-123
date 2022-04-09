const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    nationality: Nationality!
    friends: [User]
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    # friends
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    AMERICA
  }
`;
module.exports = { typeDefs };
