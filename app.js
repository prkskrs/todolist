import express from "express";
import connectDB from "./config/db.js"

import dotenv from "dotenv";
dotenv.config();
const app = express();

// cookie
import cookieParser from "cookie-parser";
app.use(cookieParser())

// morgan  middlewares
import morgan from "morgan";
app.use(morgan("tiny"));

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// import all routes here
import taskRoutes from "./Routes/taskRoutes.js";

// route middlewares
app.use("/api/v1",taskRoutes);


export default app;
