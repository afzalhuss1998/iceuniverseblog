const getDb = require("./_db");

module.exports = async (req, res) => {
  try {
    const db = await getDb();
    const blogs = db.collection("blogs");

    if (req.method === "GET") {
      const data = await blogs.find({}).toArray();
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      const result = await blogs.insertOne({ ...body, createdAt: new Date().toISOString() });
      return res.status(201).json({ insertedId: result.insertedId });
    }

    res.status(405).json({ error: "Method Not Allowed" });
  } catch (e) {
    console.error("API Error:", e);
    res.status(500).json({ error: e.message });
  }
};
