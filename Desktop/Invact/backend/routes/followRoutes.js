const express = require("express")
const router = express.Router()
const { followUser, unfollowUser } = require("../controllers/followController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/follow/:userId", authMiddleware, followUser)
router.delete("/unfollow/:userId", authMiddleware, unfollowUser)

module.exports = router
