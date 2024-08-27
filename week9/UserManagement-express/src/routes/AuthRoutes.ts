import express, { Request, Response } from "express";
import GoogleAuthController from "../controller/GoogleAuthController";
import CredentialAuthController from "../controller/CredentialAuthController";
import passport from "passport";
import TokenVerifier from "../controller/TokenVerifier";
const router = express.Router();
import "./passport-setup/passport-setup"

router.post("/google/login", GoogleAuthController.GoogleLogin);
router.post("/google/signup", GoogleAuthController.GoogleSignup);

router.post("/credential/signup", CredentialAuthController.CredentialSignup);
router.post("/credential/signin", CredentialAuthController.CredentialSignin);

router.get("/verify",passport.authenticate("jwt",{session:false}),TokenVerifier.TokenVerifier)

export default router;
