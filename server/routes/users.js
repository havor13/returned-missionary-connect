// server/routes/users.js
const express = require("express");
const multer = require("multer");
const {
  getProfile,
  updateProfile,
  addConnection,
  uploadProfilePhoto
} = require("../controllers/profileController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Configure multer storage for profile photos
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "server/uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// Routes
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
