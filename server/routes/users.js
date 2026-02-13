const express = require("express");
const multer = require("multer");
const bcrypt = require("bcryptjs"); // ✅ for password hashing
const {
  getProfile,
  updateProfile,
  addConnection,
  uploadProfilePhoto
} = require("../controllers/profileController");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User"); // <-- Import your User model

const router = express.Router();

// Configure multer storage for profile photos
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "server/uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

/**
 * ✅ GET all users
 * Route: GET /api/users
 */
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password"); // exclude password field
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
});

/**
 * ✅ Create a new user (with password hashing)
 * Route: POST /api/users
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser.toObject();
    res.status(201).json(userWithoutPassword);
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
});

/**
 * ✅ Delete a user by ID
 * Route: DELETE /api/users/:id
 */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
});

// Existing profile routes
router.get("/:id", authMiddleware, getProfile);
router.put("/:id", authMiddleware, updateProfile);
router.post("/:id/connect", authMiddleware, addConnection);

// Upload profile photo
router.post(
  "/:id/photo",
  authMiddleware,
  upload.single("profilePhoto"),
  uploadProfilePhoto
);

module.exports = router;
