const express = require("express");
const { createGroup, getGroups, joinGroup } = require("../controllers/groupController");

const router = express.Router();

// Routes
router.post("/", createGroup);   // Create a new group
router.get("/", getGroups);      // Get all groups
router.post("/join", joinGroup); // Join a group

// Optional error handler for this router
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong in groups routes!" });
});

module.exports = router;
