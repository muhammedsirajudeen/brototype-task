import express from "express"
import UserController from "../controller/UserController"
const router=express.Router()
import passport = require("passport")
import "./passport-setup/passport-setup"

router.post('/update',passport.authenticate("jwt",{session:false}),UserController.UserUpdate)

export default router