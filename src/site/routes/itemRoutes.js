const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// GET all items with filters
router.get('/', itemController.getAllItems);

// GET item by ID
router.get('/:id', itemController.getItemById);

// GET item variants
router.get('/:itemId/variants', itemController.getItemVariants);

// GET item variant by ID
router.get('/variants/:id', itemController.getItemVariantById);

module.exports = router;