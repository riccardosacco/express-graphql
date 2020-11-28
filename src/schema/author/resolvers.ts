import { Context } from "../../context";

const Resolvers = {
  Query: {
    authors: (parent: any, args: any, context: Context) => {
      return context.db.authors;
    },
    author: (parent: any, args: any, context: Context) => {
      return context.loaders.authors.find(
        (author: any) => author.id === args.id
      );
    },
  },
  Author: {
    books: (parent: any, args: any, context: Context) => {
      return context.db.books.filter(
        (book: any) => book.authorId === parent.id
      );
    },
  },
};

export default Resolvers;
