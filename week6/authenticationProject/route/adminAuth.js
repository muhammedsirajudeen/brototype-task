const express = require("express");
const crypto = require("crypto");
const userModel = require("../database/models/User");
const sha512 = require("../database/helper/hasherFunction");
const authMiddleware = require("../database/helper/authMiddleware");
const router = express.Router();

let adminUser = {
  username: "admin123",
  password: "admin123",
};

router.get("/", (req, res) => {
  res.render("pages/adminPages/adminLogin", {
    authenticated: false,
    username: null,
  });
});

//Set Authorization Access to Admin
router.get("/dashboard",authMiddleware("login"),(req,res)=>{
    if(req.session?.authorization==="admin"){
        //here change it to admin dashboard
        res.json({message:"welcome to admin dashboard"})
    }else{
        res.redirect("/")
    }
})

router.post("/auth", async (req, res) => {
  let { username, password } = req.body;

  try {
    let checkUser = await userModel.findOne({ username: username });
    if (checkUser) {
      if (
        username === checkUser.username &&
        sha512(password) === checkUser.password
      ) {
        if (checkUser.authorization !== "admin") {
          res.json({ message: "insufficient permissions" });
        } else {
          req.session.username = username;
          req.session.authorization = "admin";
          res.json({ message: "success" });
        }
      } else {
        res.json({ message: "invalid credentials" });
      }
    } else {
      res.json({ message: "no user present with that name" });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "error" });
  }
});

module.exports = router;
