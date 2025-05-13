const Category = require('../models/Category');

class CategoryService {
  async getAllCategories(filters = {}) {
    return await Category.findAll(filters);
  }

  async getCategoryById(id) {
    return await Category.findById(id);
  }

  async getCategoryBySlug(slug) {
    return await Category.findBySlug(slug);
  }

  async getCategoriesCount(filters = {}) {
    return await Category.countAll(filters);
  }

  async getCategoriesWithPagination(filters = {}) {
    const data = await this.getAllCategories(filters);
    const total = await this.getCategoriesCount(filters);
    
    return {
      data,
      total,
      page: filters.page || 1,
      limit: filters.limit || data.length,
      totalPages: filters.limit ? Math.ceil(total / filters.limit) : 1
    };
  }
}

module.exports = new CategoryService();