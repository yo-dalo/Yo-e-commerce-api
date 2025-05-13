const itemService = require('../services/itemService');
const { successResponse, errorResponse } = require('../../utils/response');

class ItemController {
  async getAllItems(req, res) {
    try {
      const filters = {
        status: req.query.status,
        category_id: req.query.category_id,
        category_slug: req.query.category_slug,
        subcategory_id: req.query.subcategory_id,
        subcategory_slug: req.query.subcategory_slug,
        search: req.query.search,
        min_price: req.query.min_price,
        max_price: req.query.max_price,
        in_stock: req.query.in_stock,
        sortBy: req.query.sortBy,
        sortOrder: req.query.sortOrder,
        limit: req.query.limit,
        offset: req.query.offset,
        page: req.query.page
      };

      if (req.query.paginate === 'true') {
        const result = await itemService.getItemsWithPagination(filters);
        return successResponse(res, result);
      }

      const items = await itemService.getAllItems(filters);
      successResponse(res, items);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }

  async getItemById(req, res) {
    try {
      const item = await itemService.getItemById(req.params.id);
      if (!item) {
        return errorResponse(res, 'Item not found', 404);
      }
      successResponse(res, item);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }

  async getItemVariants(req, res) {
    try {
      const variants = await itemService.getItemVariants(req.params.itemId);
      successResponse(res, variants);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }

  async getItemVariantById(req, res) {
    try {
      const variant = await itemService.getItemVariantById(req.params.id);
      if (!variant) {
        return errorResponse(res, 'Item variant not found', 404);
      }
      successResponse(res, variant);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }
}

module.exports = new ItemController();