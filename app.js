require("dotenv").config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const tokenGenerate = require("./utils/auth");


// Routes
const homeRoutes = require("./routes/homeRoutes");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const commentRoutes = require("./routes/commentRoutes");

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Mongo Connected");
});

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(tokenGenerate.checkForAuthenticationCookie("token"));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Use Routes
app.use("/", homeRoutes);
app.use("/", authRoutes);
app.use("/", blogRoutes);
app.use("/", commentRoutes);

// Start Server
app.listen(3000, () => {
    console.log("connected to port");
});
