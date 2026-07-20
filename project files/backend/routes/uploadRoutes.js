import express from "express";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/upload", upload.single("report"), (req, res) => {
  res.json({
    success: true,
    file: req.file,
  });
});

export default router;