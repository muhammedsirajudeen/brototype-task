import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import connectDB from "./model/dbConnect";
import session from "express-session";
import cors, { CorsOptions, CorsOptionsDelegate } from "cors";
dotenv.config();
//routes
import AuthRoute from "../src/routes/AuthRoutes";
import UserRoutes from "./routes/UserRoutes"
import passport from "passport";
import corsOptions from "./helper/corsOptions";

const app = express();
const port = process.env.PORT ?? 3000;
connectDB();
// mongoose.connect('mongodb://localhost:27017/yourdatabase');

// Configure CORS options

app.use(passport.initialize());
app.use(cors(corsOptions));
// Middleware
app.use(express.json());

// Routes
app.use("/auth", AuthRoute);
app.use("/user",UserRoutes)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
