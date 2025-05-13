const express = require('express');
const router = express.Router();
const subCategoryController = require('../controllers/subCategoryController');

// GET all sub-categories with filters
// Possible query params:
// - status (ACTIVE/INACTIVE)
// - category_id (filter by category ID)
// - category_slug (filter by category slug)
// - search (string to search in name/slug)
// - sortBy (name, created_at, updated_at)
// - sortOrder (asc/desc)
// - limit (number of items per page)
// - offset (number of items to skip)
// - page (page number, used with limit)
// - paginate (true/false to get pagination data)
router.get('/', subCategoryController.getAllSubCategories);

// GET sub-category by ID
router.get('/:id', subCategoryController.getSubCategoryById);

// GET sub-category by slug
router.get('/slug/:slug', subCategoryController.getSubCategoryBySlug);

module.exports = router;