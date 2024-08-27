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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
// Get the MongoDB URI from environment variables
const dbURI = (_a = process.env.MONGODB_URI) !== null && _a !== void 0 ? _a : "";
// Define an asynchronous function to connect to MongoDB
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Connect to MongoDB using the URI from environment variables
        yield mongoose_1.default.connect(dbURI, {
        // Optionally, you can add additional options here
        });
        console.log("MongoDB connected");
    }
    catch (error) {
        // Log any connection errors
        console.error("MongoDB connection error:", error);
    }
});
// Export the connectDB function for use in other modules
exports.default = connectDB;
