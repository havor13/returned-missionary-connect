const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },          // Event title
  description: { type: String },                    // Optional description
  date: { type: Date, required: true },             // Event date
  location: { type: String, required: true },       // Event location
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Who created it
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users attending
}, { timestamps: true });

module.exports = mongoose.model("Event", EventSchema);
