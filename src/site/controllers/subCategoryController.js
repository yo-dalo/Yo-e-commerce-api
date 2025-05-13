const subCategoryService = require('../services/subCategoryService');
const { successResponse, errorResponse } = require('../../utils/response');

class SubCategoryController {
  async getAllSubCategories(req, res) {
    try {
      const filters = {
        status: req.query.status,
        category_id: req.query.category_id,
        category_slug: req.query.category_slug,
        search: req.query.search,
        sortBy: req.query.sortBy,
        sortOrder: req.query.sortOrder,
        limit: req.query.limit,
        offset: req.query.offset,
        page: req.query.page
      };

      if (req.query.paginate === 'true') {
        const result = await subCategoryService.getSubCategoriesWithPagination(filters);
        return successResponse(res, result);
      }

      const subCategories = await subCategoryService.getAllSubCategories(filters);
      successResponse(res, subCategories);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }

  async getSubCategoryById(req, res) {
    try {
      const subCategory = await subCategoryService.getSubCategoryById(req.params.id);
      if (!subCategory) {
        return errorResponse(res, 'Sub-category not found', 404);
      }
      successResponse(res, subCategory);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }

  async getSubCategoryBySlug(req, res) {
    try {
      const subCategory = await subCategoryService.getSubCategoryBySlug(req.params.slug);
      if (!subCategory) {
        return errorResponse(res, 'Sub-category not found', 404);
      }
      successResponse(res, subCategory);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }
}

module.exports = new SubCategoryController();