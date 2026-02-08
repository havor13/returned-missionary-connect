// server/controllers/postController.js
const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { content, authorId, groupId } = req.body;
    const post = new Post({ content, author: authorId, group: groupId });
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getGroupPosts = async (req, res) => {
  try {
    const posts = await Post.find({ group: req.params.groupId })
      .populate("author", "name")
      .populate("comments.user", "name")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const { userId } = req.body;
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(userId)) {
      post.likes.push(userId);
      await post.save();
    }

    res.json({ message: "Post liked", post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { userId, text } = req.body;
    const post = await Post.findById(req.params.id);

    post.comments.push({ user: userId, text });
    await post.save();

    res.json({ message: "Comment added", post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
