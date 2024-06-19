const Like = require("../models/Like")

exports.likeDiscussion = async (req, res) => {
  const { discussionId } = req.params
  const user = req.user.userId
  try {
    const like = new Like({ user, discussion: discussionId })
    await like.save()
    res.status(201).json(like)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.likeComment = async (req, res) => {
  const { commentId } = req.params
  const user = req.user.userId
  try {
    const like = new Like({ user, comment: commentId })
    await like.save()
    res.status(201).json(like)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.unlike = async (req, res) => {
  const { likeId } = req.params
  try {
    await Like.findByIdAndDelete(likeId)
    res.json({ message: "Like removed" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
