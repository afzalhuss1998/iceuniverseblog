const getDb = require("./_db");
const { toObjectId } = require("./_util");

module.exports = async (req, res) => {
  try {
    const db = await getDb();
    const col = db.collection("blogs");

    // GET /api/blogs            -> list
    // GET /api/blogs?id=<hex>   -> single by id
    if (req.method === "GET") {
      const id = req.query?.id;
      if (id) {
        const _id = toObjectId(id);
        if (!_id) return res.status(400).json({ error: "Invalid id" });
        const doc = await col.findOne({ _id });
        return res.status(200).json(doc);
      }
      const docs = await col.find({}).limit(50).toArray();
      return res.status(200).json(docs);
    }

    // POST /api/blogs  (JSON body)
    // Accepts optional authorId, categories in many shapes
    if (req.method === "POST") {
      const raw = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
      const payload = {
        title: raw.title,
        content: raw.content,
        published: !!raw.published,
        createdAt: new Date().toISOString(),
      };

      // Optional refs – safely map if provided
      const authorId = toObjectId(raw.authorId || raw.author?._id || raw.author?.$oid);
      if (authorId) payload.authorId = authorId;

      if (Array.isArray(raw.categories)) {
        const cats = raw.categories
          .map((c) => toObjectId(c) )
          .filter(Boolean);
        if (cats.length) payload.categories = cats;
      }

      const r = await col.insertOne(payload);
      return res.status(201).json({ insertedId: r.insertedId });
    }

    res.status(405).json({ error: "Method Not Allowed" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
