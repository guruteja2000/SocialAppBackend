const mongoose = require("mongoose")
const { Schema } = mongoose

const discussionSchema = new Schema({
  text: { type: String, required: true },
  image_url: String,
  created_on: { type: Date, default: Date.now },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  hashtags: [{ type: String }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
  views: { type: Number, default: 0 },
})

module.exports = mongoose.model("Discussion", discussionSchema)
