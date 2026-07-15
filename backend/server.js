import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import fs from "fs";

console.log("ENV Exists:", fs.existsSync(".env"));
console.log("Current Folder:", process.cwd());
console.log("Mongo URI:", process.env.MONGO_URI);

dotenv.config();

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/users", userRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api", uploadRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});