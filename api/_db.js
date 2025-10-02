const { MongoClient } = require("mongodb");

// Global cache to avoid new connection on every request
let cached = global._mongo;
if (!cached) cached = global._mongo = { client: null, db: null };

module.exports = async function getDb() {
  if (cached.db) return cached.db;

  const uri = process.env.MONGO_URI;               // Vercel ENV
  const client = new MongoClient(uri);
  await client.connect();
  cached.client = client;
  cached.db = client.db("iceuniverse");            // DB name
  return cached.db;
};
