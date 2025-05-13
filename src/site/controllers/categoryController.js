const categoryService = require('../services/categoryService');
const { successResponse, errorResponse } = require('../../utils/response');

class CategoryController {
  async getAllCategories(req, res) {
    try {
      const filters = {
        status: req.query.status,
        search: req.query.search,
        sortBy: req.query.sortBy,
        sortOrder: req.query.sortOrder,
        limit: req.query.limit,
        offset: req.query.offset,
        page: req.query.page
      };

      if (req.query.paginate === 'true') {
        const result = await categoryService.getCategoriesWithPagination(filters);
        return successResponse(res, result);
      }

      const categories = await categoryService.getAllCategories(filters);
      successResponse(res, categories);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }

  async getCategoryById(req, res) {
    try {
      const category = await categoryService.getCategoryById(req.params.id);
      if (!category) {
        return errorResponse(res, 'Category not found', 404);
      }
      successResponse(res, category);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }

  async getCategoryBySlug(req, res) {
    try {
      const category = await categoryService.getCategoryBySlug(req.params.slug);
      if (!category) {
        return errorResponse(res, 'Category not found', 404);
      }
      successResponse(res, category);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }
}

module.exports = new CategoryController();