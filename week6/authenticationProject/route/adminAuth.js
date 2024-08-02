const express = require("express");
const crypto = require("crypto");
const userModel = require("../database/models/User");
const sha512 = require("../database/helper/hasherFunction");
const authMiddleware = require("../database/helper/authMiddleware");
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("hello from admin")
})

module.exports = router;
