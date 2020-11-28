import express from "express";

import { ApolloServer } from "apollo-server-express";

import { authors, books } from "./data";

import { MyContext } from "./types/context";

import { typeDefs, resolvers } from "./schema";

(async () => {
  const context = async (): Promise<MyContext> => ({
    db: {
      books,
      authors,
    },
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    playground: {
      settings: {
        "editor.theme": "light",
      },
    },
    introspection: true,
  });

  const app = express();

  server.applyMiddleware({ app, cors: true });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () =>
    console.log(`Server ready at http://localhost:${PORT}`)
  );
})();
