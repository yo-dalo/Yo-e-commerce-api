const Item = require('../models/Item');
const ItemVariant = require('../models/ItemVariant');

class ItemService {
  async getAllItems(filters = {}) {
    return await Item.findAll(filters);
  }

  async getItemById(id) {
    return await Item.findById(id);
  }

  async getItemVariants(itemId) {
    return await ItemVariant.findByItemId(itemId);
  }

  async getItemVariantById(id) {
    return await ItemVariant.findById(id);
  }

  async countAll(filters = {}) {
    try {
      let query = `
        SELECT COUNT(*) as total 
        FROM items i
        WHERE i.deleted_at IS NULL
      `;
      const params = [];

      if (filters.status) {
        query += ' AND i.status = ?';
        params.push(filters.status);
      }

      if (filters.category_id) {
        query += ' AND i.category_id = ?';
        params.push(filters.category_id);
      }

      if (filters.search) {
        query += ' AND (i.name LIKE ? OR i.description LIKE ?)';
        params.push(`%${filters.search}%`, `%${filters.search}%`);
      }

      const [rows] = await db.query(query, params);
      return rows[0].total;
    } catch (error) {
      throw new Error(`Failed to count items: ${error.message}`);
    }
  }

  async getItemsWithPagination(filters = {}) {
    const data = await this.getAllItems(filters);
    const total = await this.countAll(filters);
    
    return {
      data,
      total,
      page: filters.page || 1,
      limit: filters.limit || data.length,
      totalPages: filters.limit ? Math.ceil(total / filters.limit) : 1
    };
  }
}

module.exports = new ItemService();