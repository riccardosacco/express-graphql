import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    authors: [Author]
    author(id: Int, name: String): Author
  }

  type Author {
    id: Int!
    name: String!
    books: [Book]
  }
`;

export default typeDefs;
