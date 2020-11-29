import { Context } from "../../context";

const Resolvers = {
  Query: {
    collections: async (parent: any, args: any, context: Context) => {
      const collections = await context.db
        .collection("collections")
        .find()
        .toArray();

      return collections;
    },
    collection: async (parent: any, args: any, context: Context) => {
      const collection = await context.db
        .collection("collections")
        .findOne({ id: args.id });

      return collection;
    },
  },
  Collection: {
    records: async (parent: any, args: any, context: Context) => {
      const records = await context.db
        .collection("records")
        .find({ collection_id: parent.id })
        .toArray();

      return records;
    },
  },
  Subscription: {
    newCollection: {
      subscribe: (parent: any, args: any, { pubsub }: Context) => {},
    },
  },
};

export default Resolvers;
