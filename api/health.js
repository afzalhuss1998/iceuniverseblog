module.exports = async (req, res) => {
  res.status(200).json({
    ok: true,
    app: "iceuniverse",
    env: !!process.env.MONGO_URI
  });
};
