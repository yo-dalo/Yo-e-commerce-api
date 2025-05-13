const db = require('../../config/db');

class SubCategory {
  static async findAll(filters = {}) {
    try {
      let query = `
        SELECT sc.id, sc.category_id, c.name as category_name, 
               sc.name, sc.slug, sc.img, sc.status, 
               sc.created_at, sc.updated_at
        FROM sub_categories sc
        JOIN categories c ON sc.category_id = c.id
        WHERE 1=1
      `;
      const params = [];

      // Apply filters
      if (filters.status) {
        query += ' AND sc.status = ?';
        params.push(filters.status);
      }

      if (filters.category_id) {
        query += ' AND sc.category_id = ?';
        params.push(filters.category_id);
      }

      if (filters.category_slug) {
        query += ' AND c.slug = ?';
        params.push(filters.category_slug);
      }

      if (filters.search) {
        query += ' AND (sc.name LIKE ? OR sc.slug LIKE ?)';
        params.push(`%${filters.search}%`, `%${filters.search}%`);
      }

      // Sorting
      query += ' ORDER BY ';
      if (filters.sortBy) {
        const validSortColumns = ['name', 'created_at', 'updated_at'];
        if (validSortColumns.includes(filters.sortBy)) {
          query += `sc.${filters.sortBy} ${filters.sortOrder === 'desc' ? 'DESC' : 'ASC'}`;
        } else {
          query += 'sc.created_at DESC';
        }
      } else {
        query += 'sc.created_at DESC';
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
      throw new Error(`Failed to fetch sub-categories: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const query = `
        SELECT sc.*, c.name as category_name, c.slug as category_slug
        FROM sub_categories sc
        JOIN categories c ON sc.category_id = c.id
        WHERE sc.id = ?
      `;
      const [rows] = await db.query(query, [id]);
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Failed to fetch sub-category by ID: ${error.message}`);
    }
  }

  static async findBySlug(slug) {
    try {
      const query = `
        SELECT sc.*, c.name as category_name, c.slug as category_slug
        FROM sub_categories sc
        JOIN categories c ON sc.category_id = c.id
        WHERE sc.slug = ?
      `;
      const [rows] = await db.query(query, [slug]);
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Failed to fetch sub-category by slug: ${error.message}`);
    }
  }

  static async countAll(filters = {}) {
    try {
      let query = `
        SELECT COUNT(*) as total 
        FROM sub_categories sc
        JOIN categories c ON sc.category_id = c.id
        WHERE 1=1
      `;
      const params = [];

      if (filters.status) {
        query += ' AND sc.status = ?';
        params.push(filters.status);
      }

      if (filters.category_id) {
        query += ' AND sc.category_id = ?';
        params.push(filters.category_id);
      }

      if (filters.search) {
        query += ' AND (sc.name LIKE ? OR sc.slug LIKE ?)';
        params.push(`%${filters.search}%`, `%${filters.search}%`);
      }

      const [rows] = await db.query(query, params);
      return rows[0].total;
    } catch (error) {
      throw new Error(`Failed to count sub-categories: ${error.message}`);
    }
  }
}

module.exports = SubCategory;