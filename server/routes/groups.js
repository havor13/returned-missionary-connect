// server/routes/groups.js
const express = require("express");
const { createGroup, getGroups, joinGroup } = require("/controllers/groupController");

const router = express.Router();

router.post("/", createGroup);
router.get("/", getGroups);
router.post("/join", joinGroup);

module.exports = router;