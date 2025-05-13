const categoryService = require('../service/categoryService');

class CategoryController {
  async getCategories(req, res) {
    try {
      const filters = {
        id: req.query.id,
        name: req.query.name,
        status: req.query.status,
        parent_id: req.query.parent_id,
        sortBy: req.query.sortBy,
        sortOrder: req.query.sortOrder,
        limit: req.query.limit,
        offset: req.query.offset
      };
      
      const categories = await categoryService.getCategories(filters);
      res.json({
        success: true,
        data: categories
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new CategoryController();