import express, { Request, Response } from "express";
import AuthController from "../controller/AuthController";
import passport from "passport";
const router = express.Router();
import "./passport-setup/passport-setup"
router.get('/google',
    passport.authenticate('google', { scope: ['profile','email'] })
  );
router.get("/google/callback",passport.authenticate('google'),AuthController.REDIRECT_GOOGLE)


export default router;
