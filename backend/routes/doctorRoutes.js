import express from "express"

import {
  addDoctor,
  getDoctors
} from "../controllers/doctorController.js"

const router = express.Router()

router.post("/add", addDoctor)

router.get("/", getDoctors)

export default router