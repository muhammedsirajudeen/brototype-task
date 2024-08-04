const express = require("express");
const crypto = require("crypto");

const placeListing = require("../placeLister");
const userModel = require("../database/models/User");
const authMiddleware = require("../database/helper/authMiddleware");

const sha512 = require("../database/helper/hasherFunction");

const router = express.Router();

//if session redirect to home
router.get("/", authMiddleware("login"), (req, res) => {
  if(req.session.username){
    res.redirect("/home")
      
  }else{
    res.render("pages/Login", {
      authenticated: false,
      username: null,
      pagesource:"user"
    });
  
  }

});

//if no session redirect to login page
router.get("/home", authMiddleware("login"), (req, res) => {
  // if((req.session.authorization==="admin" && req.session.usersession) ){
    res.render("pages/Home", {
      placeListing: placeListing,
      authenticated: true,
      username: req.session.username,
      pagesource:"user"
    });
  
  
});



// handling this in client side an exceptional case i actually understood the problem lets
router.get("/authenticator", (req, res) => {
  console.log()
  if(req.session.authorization==="admin"){
    console.log(req.session.adminsession,req.session.usersession)
    res.json({message:"success",adminsession:req.session.adminsession,usersession:req.session.usersession,admin:true})
  }
  else if (req.session.username ) {
    res.json({ message: "success",usersession:req.session.usersession });
  } else {
    res.json({ message: "failure" });
  }
});

// router.get("/adminauthenticator", (req, res) => {
//   if (req.session.username ) {
//     res.json({ message: "success" });
//   } else {
//     res.json({ message: "failure" });
//   }
// });

router.get("/signup", authMiddleware("signup"), (req, res, next) => {
  res.render("pages/Signup", {
    authenticated: false,
    username: null,
    pagesource:"user"
  });
});



router.get("/signout", (req, res) => {
   if(req.session.authorization==="admin"){
    if(req.query.source==="user"){
      //here destroy user session
      req.session.usersession=false
      res.json({ message: "adminsuccess" });

    }else if(req.query.source==="admin"){
      //here destroy admin session
      req.session.adminsession=false
      req.session.destroy((error) => {
        if (error) {
          console.log(error);
        }
      });
      res.json({ message: "success" });

    }else{
      console.log("its the else case lets handle it ")
    }
  
    
  }else{
    req.session.destroy((error) => {
      if (error) {
        console.log(error);
      }
    });
    res.clearCookie("cookie.sid");
    res.json({ message: "success" });
  
  }
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
        if(checkUser.authorization==="admin"){
          req.session.usersession=true
          req.session.adminsession=true

          req.session.authorization="admin"
        }else{
          req.session.adminsession=false
          req.session.usersession=true
          req.session.authorization="user"
        }        
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
  let { username, password , place ,email } = req.body;
  try {
    let user = await userModel.findOne({ username: username });
    if (user) {
      res.json({ message: "the username already exists" });
    } else {
      let newUser = userModel({
        username: username,
        password: sha512(password),
        place : place,
        email:email
      });
      await newUser.save();
      if(req.session.authorization==="admin"){
        return res.json({message:"success",role:"admin"})
      }
      req.session.username = username;

      res.json({ message: "success" });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "failure" });
  }
});

module.exports = router;
