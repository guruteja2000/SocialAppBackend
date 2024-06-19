const express = require("express")
const router = express.Router()
const {
  likeDiscussion,
  likeComment,
  unlike,
} = require("../controllers/likeController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/discussion/:discussionId", authMiddleware, likeDiscussion)
router.post("/comment/:commentId", authMiddleware, likeComment)
router.delete("/:likeId", authMiddleware, unlike)

module.exports = router
