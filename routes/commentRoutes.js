const express = require("express");
const router = express.Router();
const comments = require("../models/comments");

// Add Comment
router.post("/comment/:blogId", async (req, res) => {
    const comment = await comments.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user._id,
    });
    return res.redirect(`/${req.params.blogId}`);
});

module.exports = router;
