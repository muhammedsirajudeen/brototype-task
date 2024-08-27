"use strict";
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
const User_1 = __importDefault(require("../model/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptHelper_1 = require("../helper/bcryptHelper");
//dont forget to hash the password being stored
const CredentialSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const checkUser = yield User_1.default.findOne({ email: email });
        if (checkUser) {
            res.status(200).json({ message: "user already exists" });
        }
        else {
            let hashedPassword = yield (0, bcryptHelper_1.hashPassword)(password);
            const newUser = new User_1.default({
                email: email,
                password: hashedPassword,
            });
            yield newUser.save();
            res.status(200).json({ message: "success" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(501).json({ message: "server error occured" });
    }
});
const CredentialSignin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { email, password } = req.body;
        const checkUser = yield User_1.default.findOne({ email: email });
        if (checkUser) {
            if (checkUser.email === email && (yield (0, bcryptHelper_1.comparePasswords)(password, checkUser.password))) {
                const token = jsonwebtoken_1.default.sign({
                    id: checkUser.id,
                    email: checkUser.email,
                    password: checkUser.password,
                }, (_a = process.env.SECRET_KEY) !== null && _a !== void 0 ? _a : "", { expiresIn: "1h" });
                res.status(200).json({ message: "success", token: token });
            }
            else {
                res.status(200).json({ message: "invalid credentials" });
            }
        }
        else {
            res.status(200).json({ message: "please signup first" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(501).json({ message: "server error occured" });
    }
});
exports.default = {
    CredentialSignup,
    CredentialSignin,
};
