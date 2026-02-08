// server/routes/events.js
const express = require("express");
const { createEvent, getEvents, getGroupEvents, rsvpEvent } = require("../controllers/eventController");

const router = express.Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.get("/group/:groupId", getGroupEvents);
router.post("/:id/rsvp", rsvpEvent);

module.exports = router;
