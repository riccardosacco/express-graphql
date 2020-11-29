import { MongoClient, Db } from "mongodb";

export type Context = {
  db: Db;
};

const context = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URI as string, {
    useUnifiedTopology: true,
  });
  return {
    db: await client.db("crm"),
  };
};

export default context;
