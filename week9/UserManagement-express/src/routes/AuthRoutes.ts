import express, { Request, Response } from "express";
import GoogleAuthController from "../controller/GoogleAuthController";
import CredentialAuthController from "../controller/CredentialAuthController";
const router = express.Router();

router.post('/google/login',GoogleAuthController.GoogleLogin)
router.post('/google/signup',GoogleAuthController.GoogleSignup)

router.post('/credential/signup',CredentialAuthController.CredentialSignup)
router.post('/credential/signin',CredentialAuthController.CredentialSignin)

export default router;
