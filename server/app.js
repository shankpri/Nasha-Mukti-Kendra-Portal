import express from "express";
import cors from "cors";
import userRouter from './routes/userRoutes.js'
import authRouter from './routes/authRoutes.js'
import {errorMiddleware} from "./middleware/error.js";
import cookieParser from "cookie-parser";
import adminRoutes from "./routes/adminRoutes.js";
const app=express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/user/",userRouter,authRouter,adminRoutes);
app.get("/", (req, res) => {
    res.json({
        status: "api run - success",
    });
});

app.use(errorMiddleware);

export default app;