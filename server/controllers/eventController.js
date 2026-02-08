// server/controllers/eventController.js
const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, location, createdBy, groupId } = req.body;
    const event = new Event({ title, description, date, location, createdBy, group: groupId });
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .populate("createdBy", "name")
      .populate("group", "missionName");
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getGroupEvents = async (req, res) => {
  try {
    const events = await Event.find({ group: req.params.groupId })
      .populate("createdBy", "name");
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.rsvpEvent = async (req, res) => {
  try {
    const { userId } = req.body;
    const event = await Event.findById(req.params.id);

    if (!event.attendees.includes(userId)) {
      event.attendees.push(userId);
      await event.save();
    }

    res.json({ message: "RSVP successful", event });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
