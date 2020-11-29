import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    collections: [Collection]
    collection(id: String): Collection
  }

  type SelectOption {
    id: String!
    value: String!
    color: String
  }

  type Property {
    id: String!
    name: String!
    type: String!
    options: [SelectOption]
  }

  type Collection {
    id: String!
    name: String!
    collection_schema: [Property]
    records: [Record]
    createdAt: String!
    updatedAt: String!
  }

  extend type Subscription {
    newCollection: Collection!
  }
`;

export default typeDefs;
