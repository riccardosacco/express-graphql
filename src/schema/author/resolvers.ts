import { MyContext } from "../../types/context";

const Resolvers = {
  Query: {
    authors: (parent: any, args: any, context: MyContext) => {
      return context.db.authors;
    },
    author: (parent: any, args: any, context: MyContext) => {
      return context.db.authors.find((author: any) => author.id === args.id);
    },
  },
  Author: {
    books: (parent: any, args: any, context: MyContext) => {
      return context.db.books.filter(
        (book: any) => book.authorId === parent.id
      );
    },
  },
};

export default Resolvers;
