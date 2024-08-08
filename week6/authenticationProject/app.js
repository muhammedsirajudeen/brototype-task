const express = require("express");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const authRouter = require("./route/authentication");
const adminRouter = require("./route/adminAuth");
const dbConnect = require("./database/helper/dbConnect");
const { pagesource } = require("./database/helper/homeArgs");
require("dotenv").config();

const app = express();
const PORT = 3000;

dbConnect();
app.use(expressLayouts);
app.set("layout", "./layout/layout");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Pragma", "no-cache");
  next();
});
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 1 month in milliseconds
    },
  })
);

app.use("/", authRouter);
app.use("/admin", adminRouter);
app.use((req, res, next) => {
  res.status(404).render("pages/404", {
    authenticated: req.session?.username ? true : false,
    username: req.session?.username,
    pagesource:"user",
    authorization:req.session.user,
    adminsession:null
  });
});
app.listen(PORT, () => console.log(`Running On Port ${PORT}`));
