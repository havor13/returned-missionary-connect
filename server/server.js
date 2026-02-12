require("dotenv").config(); // must be first

const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const mongoose = require("mongoose"); // needed for dbtest route

const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

// Connect Database
connectDB();

// Serve uploaded files (profile photos, etc.)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Root test route
app.get("/", (req, res) => {
  res.json({ message: "Returned Missionary Connect API is running..." });
});

// ✅ DB test route
app.get("/dbtest", async (req, res) => {
  try {
    // Check if mongoose is connected
    if (mongoose.connection.readyState !== 1) {
      return res.json({ status: "❌ DB connection failed", error: "Not connected" });
    }

    const collections = await mongoose.connection.db.listCollections().toArray();
    res.json({ status: "✅ DB connected", collections });
  } catch (err) {
    res.json({ status: "❌ DB connection failed", error: err.message });
  }
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
