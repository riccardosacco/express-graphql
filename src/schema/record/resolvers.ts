import { Context } from "../../context";

const Resolvers = {
  Query: {
    records: (parent: any, args: any, context: Context) => {
      return context.db;
    },
    record: (parent: any, args: any, context: Context) => {
      return context.db;
    },
  },
  Record: {
    collection: (parent: any, args: any, context: Context) => {
      return context.db;
    },
  },
};

export default Resolvers;
