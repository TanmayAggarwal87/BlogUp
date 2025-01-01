const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const userData = require("../models/mongo");
const tokenGenerate = require("../utils/auth");

// Signup
router.get("/signup", (req, res) => {
    res.render("signup");
});

router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    let user = await userData.findOne({ email });
    let hashPass = await bcrypt.hash(password, 15);

    if (user) {
        return res.send("<h1>User already exists</h1>");
    }
    user = new userData({
        username,
        email,
        password: hashPass,
    });
    await user.save();
    res.redirect("/login");
});

// Login
router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userData.findOne({ email });

        if (!user) {
            return res.send("User not found");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render("login", {
                error: "Incorrect Email or Password",
            });
        }

        const token = await tokenGenerate.createTokenUser(user);
        res.cookie("token", token).redirect("/userPage");
    } catch (error) {
        console.log(error);
        return res.render("/login", {
            error: "Incorrect Email or Password",
        });
    }
});

// Logout
router.post("/logout", (req, res) => {
    res.clearCookie("token").redirect("/");
});

module.exports = router;
