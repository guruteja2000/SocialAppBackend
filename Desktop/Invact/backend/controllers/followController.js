const User = require("../models/User")
const Follow = require("../models/Follow")

exports.followUser = async (req, res) => {
  const { userId } = req.params
  const follower = req.user.userId
  try {
    const follow = new Follow({ follower, followed: userId })
    await follow.save()
    res.status(201).json(follow)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.unfollowUser = async (req, res) => {
  const { userId } = req.params
  const follower = req.user.userId
  try {
    await Follow.findOneAndDelete({ follower, followed: userId })
    res.json({ message: "Unfollowed" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
