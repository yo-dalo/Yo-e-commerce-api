const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');

// GET /categories with filters
router.get('/', categoryController.getCategories);

module.exports = router;