const express = require("express");
const crypto = require("crypto");
const userModel = require("../database/models/User");
const sha512 = require("../database/helper/hasherFunction");
const authMiddleware = require("../database/helper/authMiddleware");
const router = express.Router();
const incrementer = 10;

router.get("/", (req, res) => {
  res.render("pages/adminPages/adminLogin", {
    authenticated: false,
    username: null,
  });
});

router.get("/user",async (req,res)=>{
  let {username}=req.query
  try{
    let checkUser=await userModel.findOne({username:username})
    if(!checkUser){
      res.json({message:"user not found"})
    }else{
      res.json({message:"success",user:checkUser})
    }
  }catch(error){
    console.log(error);
    
  }
})


router
  .route("/users")
  .get(async (req, res) => {
    if (req.query.username) {
      const regex = new RegExp(`^${req.query.username}`, "i");
      let user = await userModel.find({ username: { $regex: regex } });
      res.json({ message: "success", userArray: user });
    }
  })
  .put(async (req, res) => {
    let { username, password,newusername,newpassword } = req.body;
    try {
      let updateUser=await userModel.findOne({username:username})

      //updated based on data coming
      if (username && password) {
        updateUser.username=newusername
        updateUser.password=sha512(newpassword)
        await updateUser.save()
        res.json({ message: "success" });
      } else if (username) {
        updateUser.username=newusername
        await updateUser.save()
        res.json({ message: "success" });

      } else if (password) {
        updateUser.password=sha512(newpassword)
        await updateUser.save()  
        res.json({ message: "success" });
      }else{
        res.json({message:"insufficient info"})
      }
    } catch (error) {
      console.log(error);
      res.json({ message: "failed" });
    }
  }).delete(async (req,res)=>{
    let {username}=req.query
    try{
      let checkUser=await userModel.deleteOne({username:username})
      res.json({message:"success"})
    }catch(error){
      console.log(error)
      res.json({message:"failure"})
    }
    
  });

//Set Authorization Access to Admin
router.get(
  "/dashboard",
    authMiddleware("login"), async (req, res) => {
    if(req.session?.authorization==="admin"){
      let page = Number.parseInt(req.query.page);
      req.session.username = "faizan123";
      let usersArray = await userModel.find();
      let arrayLength = usersArray.length;
      usersArray = usersArray.filter(
        (user) => user.username !== req.session.username
      );

      if (page) {
        usersArray = usersArray.slice(
          page * 10 - incrementer,
          page * incrementer + 1
        );
      } else {
        usersArray = usersArray.slice(0, incrementer);
      }

      res.render("pages/adminPages/adminDashboard", {
        authenticated: true,
        username: "faizan123",
        usersArray: usersArray,
        arrayLength: arrayLength / 10 + 1,
      });

    }else{
        res.redirect("/")
    }
  }
);

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
