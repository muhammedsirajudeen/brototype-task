"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allowedOrigin = "http://localhost:5173";
const corsOptions = {
    origin: (origin, callback) => {
        if (origin === allowedOrigin || !origin) {
            // Allow requests with no origin (e.g., mobile apps or curl requests)
            callback(null, true);
        }
        else {
            // Deny requests from other origins
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
exports.default = corsOptions;
