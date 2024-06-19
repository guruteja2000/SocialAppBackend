const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    hashed_password: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)
