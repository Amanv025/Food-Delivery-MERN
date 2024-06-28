import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/userRoutes.js";
import cors from "cors";
import { loadStripe } from "@stripe/stripe-js";
import StripePackage, { Stripe } from "stripe";
const app=express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    // Other options if needed
  }));  
dotenv.config();
const PORT = process.env.PORT || 7000;
const MONGOURL=process.env.MONGO_URL;
mongoose.connect(MONGOURL).then(()=>{
    console.log("Database is connected")
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error)=>console.log(error));
app.use("/api/user",route);
//stripe er code er video ta dekhte hobe 