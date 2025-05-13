const Category = require('../model/category');

class CategoryService {
  async getCategories(filters) {
    try {
      return await Category.getAll(filters);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CategoryService();