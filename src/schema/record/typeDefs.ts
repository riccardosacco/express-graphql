import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    records: [Record]
    record(id: String, collection_id: String): Record
  }

  type RecordTextValue {
    type: String!
    value: String!
  }

  type RecordNumberValue {
    type: String!
    value: Int!
  }

  type RecordArrayValue {
    type: String!
    value: [String]
  }

  type RecordBooleanValue {
    type: String!
    value: Boolean
  }

  union RecordValue =
      RecordTextValue
    | RecordNumberValue
    | RecordArrayValue
    | RecordBooleanValue

  type RecordProperty {
    id: String!
    value: RecordValue
  }

  type Record {
    record_id: String!
    collection_id: String!
    properties: [RecordProperty]
    createdAt: String!
    updatedAt: String!
    collection: Collection
  }
`;

export default typeDefs;
