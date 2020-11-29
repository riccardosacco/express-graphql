import express from "express";

import dotenv from "dotenv";

import { ApolloServer, PubSub } from "apollo-server-express";

import { typeDefs, resolvers } from "./schema";

import context from "./context";

dotenv.config();

(async () => {
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
    tracing: true,
  });

  const app = express();

  server.applyMiddleware({ app, cors: true });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () =>
    console.log(`Server ready at http://localhost:${PORT}`)
  );
})();
