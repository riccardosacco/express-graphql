import { Context } from "../../context";

const Resolvers = {
  Query: {
    books: (parent: any, args: any, context: Context) => {
      return context.db.books;
    },
    book: (parent: any, args: any, context: Context) => {
      return context.db.books.find((book: any) => book.id === args.id);
    },
  },
  Book: {
    author: (parent: any, args: any, context: Context) => {
      return context.loaders.author.load(parent.authorId);
    },
  },
};

export default Resolvers;
