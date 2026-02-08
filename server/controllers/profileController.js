// server/controllers/profileController.js
const User = require("../models/User");

// Get user profile by ID
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-passwordHash") // exclude sensitive field
      .populate("connections", "name profilePhoto");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true })
      .select("-passwordHash");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ message: "Profile updated", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a connection (missionary friend)
exports.addConnection = async (req, res) => {
  try {
    const { friendId } = req.body;
    const user = await User.findById(req.params.id);

    if (!user.connections.includes(friendId)) {
      user.connections.push(friendId);
      await user.save();
    }

    res.json({ message: "Connection added", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Upload profile photo
exports.uploadProfilePhoto = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Save file path (or URL if using cloud storage)
    user.profilePhoto = `/uploads/${req.file.filename}`;
    await user.save();

    res.json({ message: "Profile photo updated", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
