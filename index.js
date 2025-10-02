const getDb = require("./api/_db");

(async () => {
  const db = await getDb(); // ensure this matches Compass DB name

  const usersCollection = db.collection("users");

  // test insert
  await usersCollection.insertOne({ name: "Test User", role: "Tester" });
  console.log("✅ Test document inserted successfully!");

  process.exit(0);
})();
