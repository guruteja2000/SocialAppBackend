const mongoose = require("mongoose")
const { Schema } = mongoose

const commentSchema = new Schema({
  text: { type: String, required: true },
  created_on: { type: Date, default: Date.now },
  discussion: { type: Schema.Types.ObjectId, ref: "Discussion" },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
})

module.exports = mongoose.model("Comment", commentSchema)
