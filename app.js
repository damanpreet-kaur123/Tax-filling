import authRoutes from "./routes/auth.js";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log(" MongoDB connected"))
    .catch((err) => console.log(" DB Error:", err));

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});