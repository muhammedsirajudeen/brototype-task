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
exports.hashPassword = hashPassword;
exports.comparePasswords = comparePasswords;
const bcrypt_1 = __importDefault(require("bcrypt"));
function hashPassword(plainTextPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Generate salt
            const salt = yield bcrypt_1.default.genSalt(10);
            // Hash the password with the generated salt
            const hash = yield bcrypt_1.default.hash(plainTextPassword, salt);
            // Return the hash or store it in your database
            return hash;
        }
        catch (error) {
            console.error("Error hashing password:", error);
            throw error; // Rethrow the error if needed
        }
    });
}
function comparePasswords(plainTextPassword, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Compare plain-text password with the hashed password
            const match = yield bcrypt_1.default.compare(plainTextPassword, hash);
            return match; // Returns true if passwords match, otherwise false
        }
        catch (error) {
            console.error("Error comparing passwords:", error);
            throw error; // Rethrow the error if needed
        }
    });
}
