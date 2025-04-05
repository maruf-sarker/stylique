const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Stylique API",
  });
});

router.get("/posts", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Fetching all posts",
  });
});

router.get("/posts/:id", (req, res) => {
  const postId = req.params.id;
  res.status(200).json({
    status: "success",
    message: `Fetching post with ID: ${postId}`,
  });
});

router.post("/posts", (req, res) => {
  const newPost = req.body;
  res.status(201).json({
    status: "success",
    message: "Post created successfully",
    data: newPost,
  });
});

router.put("/posts/:id", (req, res) => {
  const postId = req.params.id;
  const updatedPost = req.body;
  res.status(200).json({
    status: "success",
    message: `Post with ID: ${postId} updated successfully`,
    data: updatedPost,
  });
});

router.delete("/posts/:id", (req, res) => {
  const postId = req.params.id;
  res.status(200).json({
    status: "success",
    message: `Post with ID: ${postId} deleted successfully`,
  });
});

module.exports = router;
