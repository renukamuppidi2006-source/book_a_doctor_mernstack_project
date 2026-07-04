import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"

import connectDB from "./config/db.js"

import doctorRoutes from "./routes/doctorRoutes.js"

import appointmentRoutes from "./routes/appointmentRoutes.js"

dotenv.config()

connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
  res.send("API Running")
})

app.use("/api/doctors", doctorRoutes)
app.use("/api/users", userRoutes)
app.use("/api/appointments", appointmentRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})