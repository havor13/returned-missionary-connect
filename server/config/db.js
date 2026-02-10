// server/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use environment variable for flexibility
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/missionaryconnect";

    await mongoose.connect(uri); // no deprecated options needed in Mongoose v6+

    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ DB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
