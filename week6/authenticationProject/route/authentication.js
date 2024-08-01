const express = require("express");
const placeListing = require("../placeLister");

const router = express.Router();

const user = {
  username: "sirajudeen",
  password: "sirajudeen",
};

const authMiddleware = (req, res, next) => {
  if (req.session?.username) {
    next();
  } else {
    res.render("pages/Login", {
      authenticated: false,
      username: null,
    });
  }
};

router.post("/auth", (req, res) => {
  try {
    let { username, password } = req.body;
    if (username === user.username && password === user.password) {
      req.session.username = username;
      res.json({ message: "success" });
    } else {
      res.json({ message: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "failure" });
  }
});

//if session redirect to home
router.get("/", authMiddleware, (req, res) => {
  res.render("pages/Login", {
    authenticated: false,
    username: null,
  });
});

//if no session redirect to login page
router.get("/home", authMiddleware, (req, res) => {
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

router.get("/signout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.clearCookie("cookie.sid");
  res.json({ message: "success" });
});

module.exports = router;
