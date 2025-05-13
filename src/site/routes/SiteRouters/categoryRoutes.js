const express = require('express');
const upload = require('../../middleware/multer.middleware');
const categoryController = require('../../controllers/categoryController');
const authorizePermission = require('../../middleware/authorizePermission');
const {adminAuth} = require('../../middleware/authMiddleware.js');

const router = express.Router();






router.get('/',categoryController.getAllX);







module.exports = router;
