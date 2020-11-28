import { authors, books } from "../data";

import DataLoader from "dataloader";

export type Context = {
  db: {
    books: object[];
    authors: object[];
  };
  loaders: {
    [key: string]: any;
  };
};

const context = async (): Promise<Context> => ({
  db: {
    books,
    authors,
  },
  loaders: {
    author: new DataLoader(async (keys: any) => {
      const authorMap: any = {};

      authors.forEach((author) => {
        authorMap[author.id] = author;
      });

      return keys.map((key: number) => authorMap[key]);
    }),
  },
});

export default context;
