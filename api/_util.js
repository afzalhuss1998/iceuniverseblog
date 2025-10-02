const { ObjectId } = require("mongodb");

function toObjectId(id) {
  if (!id) return null;
  try {
    return new ObjectId(id);
  } catch (e) {
    return null;
  }
}

module.exports = { toObjectId };
