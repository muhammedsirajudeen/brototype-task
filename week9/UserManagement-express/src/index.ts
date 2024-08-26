import express, { Request, Response } from "express";
import * as dotenv from 'dotenv';
import connectDB from "./model/dbConnect";
import session from 'express-session';
import cors, { CorsOptions, CorsOptionsDelegate } from "cors"
dotenv.config();
//routes
import AuthRoute from "../src/routes/AuthRoutes";
import passport from "passport";
const app = express();
const port = 3000;
connectDB()
// mongoose.connect('mongodb://localhost:27017/yourdatabase');

const allowedOrigin = 'http://localhost:5173';

// Configure CORS options
const corsOptions: CorsOptions | CorsOptionsDelegate = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (origin === allowedOrigin || !origin) {
      // Allow requests with no origin (e.g., mobile apps or curl requests)
      callback(null, true);
    } else {
      // Deny requests from other origins
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};


app.use(passport.initialize());
app.use(cors(corsOptions))
// Middleware
app.use(express.json());

// Routes
app.use("/auth", AuthRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
