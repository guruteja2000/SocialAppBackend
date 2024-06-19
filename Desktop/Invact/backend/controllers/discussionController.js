const Discussion = require("../models/Discussion")

exports.createDiscussion = async (req, res) => {
  const { text, image_url, hashtags } = req.body
  const owner = req.user.userId
  try {
    const discussion = new Discussion({ text, image_url, hashtags, owner })
    await discussion.save()
    res.status(201).json(discussion)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.updateDiscussion = async (req, res) => {
  const { discussionId } = req.params
  try {
    const discussion = await Discussion.findByIdAndUpdate(
      discussionId,
      req.body,
      { new: true }
    )
    res.json(discussion)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteDiscussion = async (req, res) => {
  const { discussionId } = req.params
  try {
    await Discussion.findByIdAndDelete(discussionId)
    res.json({ message: "Discussion deleted" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getDiscussionsByTags = async (req, res) => {
  let { tags } = req.query
  tags = decodeURIComponent(tags)
  try {
    const discussions = await Discussion.find({
      hashtags: { $in: tags.split(",") },
    })
    res.json(discussions)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getDiscussionsByText = async (req, res) => {
  const { text } = req.query
  try {
    const discussions = await Discussion.find({ text: new RegExp(text, "i") })
    res.json(discussions)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
