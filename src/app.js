const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { errorHandler } = require('./middleware/errorHandler');
const index = require("./routes/index")
const siteRouters = require("./routes/SiteRouters/index")
const test = require("./Test")
const upload =require("./middleware/multer.middleware")

const cookieParser = require('cookie-parser');



const db = require('./config/db')
dotenv.config();
const app = express();

// Middleware
//app.use(cors());

const allowedOrigins = [
  'http://localhost:5173', 
  'http://localhost:5174', 
  'http://localhost:7700',
  'http://localhost:3000',
  'http://localhost:5000',
  ];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));



app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());


app.use("/uploads", express.static("uploads"));


// Routes
app.use('/api',index);
app.use('/api/site',siteRouters);





app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'Route Not Found' });
});

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
