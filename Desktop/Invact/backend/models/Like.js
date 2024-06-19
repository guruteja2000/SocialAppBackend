const mongoose = require("mongoose")
const { Schema } = mongoose

const likeSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  discussion: { type: Schema.Types.ObjectId, ref: "Discussion" },
  comment: { type: Schema.Types.ObjectId, ref: "Comment" },
})

module.exports = mongoose.model("Like", likeSchema)
