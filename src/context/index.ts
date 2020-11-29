import { PubSub } from "apollo-server-express";
import { MongoClient, Db } from "mongodb";

export type Context = {
  db: Db;
  pubsub: PubSub;
};

const pubsub = new PubSub();

const context = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URI as string, {
    useUnifiedTopology: true,
  });
  return {
    db: await client.db("crm"),
    pubsub,
  };
};

export default context;
