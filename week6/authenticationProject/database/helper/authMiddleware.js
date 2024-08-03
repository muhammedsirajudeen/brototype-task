const authMiddleware = (returner) => {
  if (returner === "login") {
    return (req, res, next) => {
      if (req.session?.username) {
        next();
      } else {
        res.render("pages/Login", {
          authenticated: false,
          username: null,
        });
      }
    };
  } else if (returner === "signup") {
    return (req, res, next) => {
      if(req.session.authorization==="admin"){
        console.log("clicked")
        return res.render("pages/Signup", {
          authenticated: false,
          username: null,
        });    
      }
      if (req.session?.username) {
        res.redirect("/home");
      } else {
        res.render("pages/Signup", {
          authenticated: false,
          username: null,
        });
      }
    };
  }
  else if(returner==="admin"){
    return (req, res, next) => {
      if (req.session?.username) {
        next();
      } else {
        res.render("pages/adminPages/adminLogin", {
          authenticated: false,
          username: null,
        });
      }
    };
  }
};

module.exports=authMiddleware