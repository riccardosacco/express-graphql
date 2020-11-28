import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    books: [Book]
    book(id: Int, name: String): Book
  }

  type Book {
    id: Int!
    name: String!
    authorId: Int!
    author: Author
  }
`;

export default typeDefs;
