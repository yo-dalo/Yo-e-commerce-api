const express = require('express');
const upload_ = require("./middleware/multer.middleware")
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express.Router();

const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// File Filter (Allow only images)
const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image files are allowed"), false);
  }
  cb(null, true);
};

// Multer Middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB Limit
  fileFilter: fileFilter,
});

// Route to handle file upload
app.post("/upload", upload_.single("img"), (req, res) => {
  if (!req.file) {
    console.log(req.file);
    return res.status(401).send("No file uploaded or invalid file type.");
  }
  console.log(req.file); // Log the uploaded file details
  res.send("File uploaded successfully!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).send("File upload error: " + err.message);
  }
  res.status(500).send("Something went wrong!");
});








module.exports = app;
