const db = require('../../config/db');

class Category {
  static async findAll(filters = {}) {
    try {
      let query = `
        SELECT id, name, slug, img, created_at, updated_at 
        FROM categories 
        WHERE 1=1
      `;
      const params = [];

      // Apply filters
      if (filters.status) {
        query += ' AND status = ?';
        params.push(filters.status);
      }

      if (filters.search) {
        query += ' AND (name LIKE ? OR slug LIKE ?)';
        params.push(`%${filters.search}%`, `%${filters.search}%`);
      }

      // Sorting
      query += ' ORDER BY ';
      if (filters.sortBy) {
        const validSortColumns = ['name', 'created_at', 'updated_at'];
        if (validSortColumns.includes(filters.sortBy)) {
          query += `${filters.sortBy} ${filters.sortOrder === 'desc' ? 'DESC' : 'ASC'}`;
        } else {
          query += 'created_at DESC';
        }
      } else {
        query += 'created_at DESC';
      }

      // Pagination
      if (filters.limit) {
        query += ' LIMIT ?';
        params.push(parseInt(filters.limit));
        
        if (filters.offset) {
          query += ' OFFSET ?';
          params.push(parseInt(filters.offset));
        }
      }

      const [rows] = await db.query(query, params);
      return rows;
    } catch (error) {
      throw new Error(`Failed to fetch categories: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const [rows] = await db.query(
        'SELECT * FROM categories WHERE id = ?', 
        [id]
      );
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Failed to fetch category by ID: ${error.message}`);
    }
  }

  static async findBySlug(slug) {
    try {
      const [rows] = await db.query(
        'SELECT * FROM categories WHERE slug = ?', 
        [slug]
      );
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Failed to fetch category by slug: ${error.message}`);
    }
  }

  static async countAll(filters = {}) {
    try {
      let query = 'SELECT COUNT(*) as total FROM categories WHERE 1=1';
      const params = [];

      if (filters.status) {
        query += ' AND status = ?';
        params.push(filters.status);
      }

      if (filters.search) {
        query += ' AND (name LIKE ? OR slug LIKE ?)';
        params.push(`%${filters.search}%`, `%${filters.search}%`);
      }

      const [rows] = await db.query(query, params);
      return rows[0].total;
    } catch (error) {
      throw new Error(`Failed to count categories: ${error.message}`);
    }
  }
}

module.exports = Category;