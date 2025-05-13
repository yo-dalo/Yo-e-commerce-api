const SubCategory = require('../models/SubCategory');

class SubCategoryService {
  async getAllSubCategories(filters = {}) {
    return await SubCategory.findAll(filters);
  }

  async getSubCategoryById(id) {
    return await SubCategory.findById(id);
  }

  async getSubCategoryBySlug(slug) {
    return await SubCategory.findBySlug(slug);
  }

  async getSubCategoriesCount(filters = {}) {
    return await SubCategory.countAll(filters);
  }

  async getSubCategoriesWithPagination(filters = {}) {
    const data = await this.getAllSubCategories(filters);
    const total = await this.getSubCategoriesCount(filters);
    
    return {
      data,
      total,
      page: filters.page || 1,
      limit: filters.limit || data.length,
      totalPages: filters.limit ? Math.ceil(total / filters.limit) : 1
    };
  }
}

module.exports = new SubCategoryService();