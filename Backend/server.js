import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import managerRoutes from "./routes/managerRoutes.js";
import sliderRoutes from "./routes/sliderRoutes.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";

dotenv.config();

const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/manager", managerRoutes);
app.use("/api/sliders", sliderRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/team", teamRoutes);

// Port
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected Bro.");

        app.listen(PORT, () => {
            console.log(`Full Bakajiki on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });