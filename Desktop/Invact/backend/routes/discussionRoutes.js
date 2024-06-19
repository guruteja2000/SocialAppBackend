const express = require("express")
const router = express.Router()
const {
  createDiscussion,
  updateDiscussion,
  deleteDiscussion,
  getDiscussionsByTags,
  getDiscussionsByText,
} = require("../controllers/discussionController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/create", authMiddleware, createDiscussion)
router.put("/update/:discussionId", authMiddleware, updateDiscussion)
router.delete("/delete/:discussionId", authMiddleware, deleteDiscussion)
router.get("/tags", getDiscussionsByTags)
router.get("/search", getDiscussionsByText)

module.exports = router
