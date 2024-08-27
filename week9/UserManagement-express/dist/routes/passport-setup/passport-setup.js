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
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const User_1 = __importDefault(require("../../model/User"));
// import keys from './config/keys'; // Your secret or public key
// Define options for JWT strategy
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "muhammedsirajudeen",
};
// Create JWT strategy
passport_1.default.use(new passport_jwt_1.Strategy(options, (jwtPayload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Find the user specified in the token
        const user = yield User_1.default.findById(jwtPayload.id);
        if (user) {
            // If user exists, pass user to `req.user`
            done(null, user);
        }
        else {
            // If user does not exist, return `false`
            done(null, false);
        }
    }
    catch (error) {
        done(error, false);
    }
})));
// Initialize passport
passport_1.default.initialize();
