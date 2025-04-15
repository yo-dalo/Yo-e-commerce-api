const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { errorHandler } = require('./middleware/errorHandler');
const index = require("./routes/index")
const test = require("./Test")
const upload =require("./middleware/multer.middleware")

const db = require('./config/db')
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use("/uploads", express.static("uploads"));


// Routes
app.use('/api',index);





app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'Route Not Found' });
});

// Error Handling Middleware
//app.use(errorHandler);

module.exports = app;
