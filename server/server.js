// server/server.js
require("dotenv").config(); // must be first

const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Serve uploaded files (profile photos, etc.)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Test route
app.get("/", (req, res) => {
  res.send("Returned Missionary Connect API is running...");
});

// Import routes
const authRoutes = require("./routes/auth");
const groupRoutes = require("./routes/groups");
const postRoutes = require("./routes/posts");
const eventRoutes = require("./routes/events");
const userRoutes = require("./routes/users");

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);

// Error handler middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
