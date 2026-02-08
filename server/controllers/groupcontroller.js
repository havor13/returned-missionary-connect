// server/controllers/groupController.js
const Group = require("../models/Group");

exports.createGroup = async (req, res) => {
  try {
    const { missionName, description, createdBy } = req.body;
    const group = new Group({ missionName, description, createdBy });
    await group.save();
    res.json(group);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.find().populate("createdBy", "name");
    res.json(groups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.joinGroup = async (req, res) => {
  try {
    const { groupId, userId } = req.body;
    const group = await Group.findById(groupId);

    if (!group.members.includes(userId)) {
      group.members.push(userId);
      await group.save();
    }

    res.json({ message: "Joined group successfully", group });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
