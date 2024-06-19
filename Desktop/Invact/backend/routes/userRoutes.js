const express = require("express")
const router = express.Router()
const {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  searchUserByName,
} = require("../controllers/UserController")
const authMiddleware = require("../middlewares/authMiddleware")

router.put("/update/:userId", authMiddleware, updateUser)
router.delete("/delete/:userId", authMiddleware, deleteUser)
router.get("/", getUsers)
router.get("/search", searchUserByName)

module.exports = router
