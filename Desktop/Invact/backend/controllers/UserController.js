const User = require("../models/User")

exports.updateUser = async (req, res) => {
  const { userId } = req.params
  try {
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true })
    res.json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteUser = async (req, res) => {
  const { userId } = req.params
  try {
    await User.findByIdAndDelete(userId)
    res.json({ message: "User deleted" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.searchUserByName = async (req, res) => {
  const { name } = req.query
  try {
    const users = await User.find({ name: new RegExp(name, "i") })
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
