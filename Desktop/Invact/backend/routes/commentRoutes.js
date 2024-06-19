const express = require("express")
const router = express.Router()
const {
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/create/:discussionId", authMiddleware, createComment)
router.put("/update/:commentId", authMiddleware, updateComment)
router.delete("/delete/:commentId", authMiddleware, deleteComment)

module.exports = router
