"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GoogleAuthController_1 = __importDefault(require("../controller/GoogleAuthController"));
const CredentialAuthController_1 = __importDefault(require("../controller/CredentialAuthController"));
const router = express_1.default.Router();
router.post("/google/login", GoogleAuthController_1.default.GoogleLogin);
router.post("/google/signup", GoogleAuthController_1.default.GoogleSignup);
router.post("/credential/signup", CredentialAuthController_1.default.CredentialSignup);
router.post("/credential/signin", CredentialAuthController_1.default.CredentialSignin);
exports.default = router;
