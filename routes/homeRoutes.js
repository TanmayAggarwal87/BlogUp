const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

// Home Page
router.get("/", (req, res) => {
    res.render("home", {
        user: req.user,
    });
});

// User Page
router.get("/userPage", async (req, res) => {
    const allBlogs = await Blog.find().populate("createdBy","username");
    res.render("userPage", {
        user: req.user,
        blogs: allBlogs,
    });
});

module.exports = router;
