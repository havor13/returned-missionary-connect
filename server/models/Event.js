// server/models/Event.js
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },         // e.g. "Mission Reunion"
  description: { type: String },
  date: { type: Date, required: true },
  location: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" }, // optional: tied to alumni group
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });

module.exports = mongoose.model("Event", EventSchema);
