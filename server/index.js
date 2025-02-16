import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./src/route/userRoutes.js";
import connectDB from "./src/dbConnection/dbConnect.js";
import paymentRoutes from "./src/route/paymentRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/users", userRoutes);
app.use("/api/payment", paymentRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});