const Comment = require("../models/Comment")

exports.createComment = async (req, res) => {
  const { discussionId } = req.params
  const { text } = req.body
  const owner = req.user.userId
  try {
    const comment = new Comment({ text, discussion: discussionId, owner })
    await comment.save()
    res.status(201).json(comment)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.updateComment = async (req, res) => {
  const { commentId } = req.params
  try {
    const comment = await Comment.findByIdAndUpdate(commentId, req.body, {
      new: true,
    })
    res.json(comment)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteComment = async (req, res) => {
  const { commentId } = req.params
  try {
    await Comment.findByIdAndDelete(commentId)
    res.json({ message: "Comment deleted" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
