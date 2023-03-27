import express, { urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

import routes from './routes/index.js';
//dotenv config files 
dotenv.config();

const app=express();
//connecing to mongo db
mongoose.connect(process.env.MONGO);

app.use(cookieParser());
app.use(express.json());
app.use(urlencoded());
app.use(cors());

//outing the appliactions 
routes(app);

//setting the erros messages 
app.use((error,req,res,next)=>{
    const errorStatus = error.status || 500
    const errorMessage= error.message || "Something is wrong !!!"
    return res.status(errorStatus).json({
        success:false,
        status : errorStatus,
        message: errorMessage,
    });
})

export default app;