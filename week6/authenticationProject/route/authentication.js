const express = require("express");
const crypto = require("crypto");

const placeListing = require("../placeLister");
const userModel = require("../database/models/User");
const authMiddleware = require("../database/helper/authMiddleware");

const sha512 = require("../database/helper/hasherFunction");

const router = express.Router();

//if session redirect to home
router.get("/", authMiddleware("login"), (req, res) => {
  res.render("pages/Login", {
    authenticated: false,
    username: null,
  });
});

//if no session redirect to login page
router.get("/home", authMiddleware("login"), (req, res) => {
  res.render("pages/Home", {
    placeListing: placeListing,
    authenticated: true,
    username: req.session.username,
  });
});

// handling this in client side an exceptional case
router.get("/authenticator", (req, res) => {
  if (req.session.username) {
    res.json({ message: "success" });
  } else {
    res.json({ message: "failure" });
  }
});

router.get("/signup", authMiddleware("signup"), (req, res, next) => {
  res.render("pages/Signup", {
    authenticated: false,
    username: null,
  });
});

router.get("/signout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    }
  });
  res.clearCookie("cookie.sid");
  res.json({ message: "success" });
});

router.post("/auth", async (req, res) => {
  try {
    let { username, password } = req.body;
    let hashedPassword = sha512(password);
    let checkUser = await userModel.findOne({ username: username });
    if (!checkUser) {
      res.json({ message: "user doesnt exist" });
    } else {
      if (
        username === checkUser.username &&
        hashedPassword === checkUser.password
      ) {
        req.session.username = username;
        res.json({ message: "success" });
      } else {
        res.json({ message: "invalid credentials" });
      }
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "failure" });
  }
});

//only admin can add another admin dont forget to handle this
router.post("/register", async (req, res) => {
  let { username, password } = req.body;
  try {
    let user = await userModel.findOne({ username: username });
    if (user) {
      res.json({ message: "the username already exists" });
    } else {
      let newUser = userModel({
        username: username,
        password: sha512(password),
      });
      await newUser.save();
      req.session.username = username;
      res.json({ message: "success" });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "failure" });
  }
});

module.exports = router;
