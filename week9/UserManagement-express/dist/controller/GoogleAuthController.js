"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const User_1 = __importDefault(require("../model/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const getUserdata = (userToken) => __awaiter(void 0, void 0, void 0, function* () {
    const data = (yield axios_1.default.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userToken}`, {
        headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: "application/json",
        },
    })).data;
    return data;
});
const GoogleLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userToken = req.body.userToken;
        let data = yield getUserdata(userToken);
        let userData = data;
        const checkUser = yield User_1.default.findOne({ email: userData.email });
        if (checkUser) {
            const token = jsonwebtoken_1.default.sign({
                id: checkUser.id,
                email: checkUser.email,
                password: checkUser.password,
            }, (_a = process.env.SECRET_KEY) !== null && _a !== void 0 ? _a : "", { expiresIn: "1h" });
            res.status(200).json({ message: "success", token: token });
        }
        else {
            res.status(200).json({ message: "user doesnt exist" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "server error occured" });
    }
});
//dont forget to hash the password first
const GoogleSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userToken = req.body.userToken;
        let data = yield getUserdata(userToken);
        let userData = data;
        const checkUser = yield User_1.default.findOne({ email: userData.email });
        if (checkUser) {
            res.status(200).json({ message: "user already exists" });
        }
        else {
            //registering new user here
            let newUser = new User_1.default({
                email: userData.email,
                password: userData.id,
                profileImage: userData.picture,
            });
            yield newUser.save();
            res.status(200).json({ message: "success" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "server error occured" });
    }
});
exports.default = {
    GoogleLogin,
    GoogleSignup,
};
