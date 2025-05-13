const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// GET all categories with filters
// Possible query params:
// - status (ACTIVE/INACTIVE)
// - search (string to search in name/slug)
// - sortBy (name, created_at, updated_at)
// - sortOrder (asc/desc)
// - limit (number of items per page)
// - offset (number of items to skip)
// - page (page number, used with limit)
// - paginate (true/false to get pagination data)
router.get('/', categoryController.getAllCategories);

// GET category by ID
router.get('/:id', categoryController.getCategoryById);

// GET category by slug
router.get('/slug/:slug', categoryController.getCategoryBySlug);

module.exports = router;