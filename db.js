const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://iceuniverse:<db_password>@iceuniverse.qxm5ary.mongodb.net/?retryWrites=true&w=majority&appName=iceuniverse";

async function connectDB() {
  const client = new MongoClient(uri);
  await client.connect();

  // Apna DB yaha select kar
  const db = client.db("iceuniverse");

  console.log("✅ Connected to DB:", db.databaseName);
  return { client, db };
}

module.exports = connectDB;
