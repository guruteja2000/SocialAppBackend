const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()

exports.signup = async (req, res) => {
  const { name, email, mobile, password } = req.body
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({
      name,
      email,
      mobile,
      hashed_password: hashedPassword,
    })
    await user.save()
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user || !(await bcrypt.compare(password, user.hashed_password))) {
      return res.status(400).json({ error: "Invalid credentials" })
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    })
    res.json({ token })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
