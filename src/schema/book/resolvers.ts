import { MyContext } from "../../types/context";

const Resolvers = {
  Query: {
    books: (parent: any, args: any, context: MyContext) => {
      return context.db.books;
    },
    book: (parent: any, args: any, context: MyContext) => {
      return context.db.books.find((book: any) => book.id === args.id);
    },
  },
  Book: {
    author: (parent: any, args: any, context: MyContext) => {
      return context.db.authors.find(
        (author: any) => author.id === parent.authorId
      );
    },
  },
};

export default Resolvers;
