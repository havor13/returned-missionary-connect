// server/models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },

  // Missionary details
  mission: { type: String, required: true },       // e.g. "Ghana Accra Mission"
  yearsServed: { type: String, required: true },   // e.g. "2018-2020"

  // Profile
  profilePhoto: { type: String },                  // optional profile picture
  testimony: { type: String },                     // optional testimony text

  // Connections
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  // Admin / role-based access
  role: { type: String, enum: ["user", "admin"], default: "user" },

}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
