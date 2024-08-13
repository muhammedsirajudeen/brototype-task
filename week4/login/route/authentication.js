const express = require("express");
const placeListing = require("../placeLister");

const router = express.Router();

const user = {
  username: "sirajudeen",
  password: "sirajudeen",
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
router.get("/", (req, res) => {
  if (req.session.username) {
    res.redirect("/home");
  } else {
    res.render("Login", {
      authenticated: false,
    });
  }
});

//if no session redirect to login page
router.get("/home", (req, res) => {
  if (req.session.username) {
    res.render("Home", {
      placeListing: placeListing,
      authenticated: true,
      username: req.session.username,
    });
  } else {
    res.redirect("/");
  }
});
router.get('/authenticator',(req,res)=>{
    if(req.session.username){
        res.json({message:"success"})
    }else{
        res.json({message:"failure"})
    }
})

router.get("/signout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.clearCookie("cookie.sid");
  res.json({ message: "success" });
});

router.get('/addition',(req,res)=>{
  let num1=Number.parseInt(req.query.num1)
  let num2=Number.parseInt(req.query.num2)
  let sum=num1+num2
  res.json({
    sum:sum,
    subtraction:num1-num2,
    multiplication:num1*num2,
    division:num1/num2
  })
  
})

module.exports = router;
