// server/models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  mission: { type: String, required: true },       // e.g. "Ghana Accra Mission"
  yearsServed: { type: String, required: true },   // e.g. "2018-2020"
  profilePhoto: { type: String },                  // optional profile picture
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // missionary friends
  testimony: { type: String },                     // optional testimony text
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
