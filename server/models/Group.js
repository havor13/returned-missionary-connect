const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  missionName: { type: String, required: true },   // e.g. "Ghana Kumasi Mission Alumni"
  description: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }], // link events to group
}, { timestamps: true });

module.exports = mongoose.model("Group", GroupSchema);
