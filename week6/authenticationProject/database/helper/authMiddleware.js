const authMiddleware = (returner) => {
  if (returner === "login") {
    return (req, res, next) => {
    // if((req.session.usersession===false || req.session.adminsession===false) && req.session.authorization==="admin" ){
    //   res.render("pages/Login", {
    //     authenticated: false,
    //     username: null,
    //     pagesource:"user"
    //   });
      
    // }
     if (req.session?.username && req.session.usersession ) {
      next();
    } else {
      res.render("pages/Login", {
        authenticated: false,
        username: null,
        pagesource:"user",
        authorization:req.session.authorization,
        adminsession:req.session?.adminsession


      });
    }
    };
  } else if (returner === "signup") {
    return (req, res, next) => {
      // if(req.session.authorization==="admin"){
      //   console.log("clicked")
      //   return res.render("pages/Signup", {
      //     authenticated: false,
      //     username: null,
      //     pagesource:"user"
      //   });    
      // }
      if (req.session?.username) {
        res.redirect("/home");
      } else {
        res.render("pages/Signup", {
          authenticated: false,
          username: null,
          pagesource:"user",
          authorization:req.session.authorization,
          adminsession:req.session?.adminsession


        });
      }
    };
  }
  else if(returner==="admin"){
    return (req, res, next) => {
      if (req.session.authorization==="admin") {
        next();
      }else if(req.session.authorization==="user"){
        res.redirect("/")
      }
       else {
        res.render("pages/adminPages/adminLogin", {
          authenticated: false,
          username: null,
          pagesource:"user",
          authorization:req.session.authorization,
          adminsession:req.session?.adminsession


        });
      }
    };
  }
};

module.exports=authMiddleware