const db = require('../config/database'); // Assuming you have a database config

class Category {
  static async getAll(filters = {}) {
    let query = 'SELECT * FROM categories WHERE 1=1';
    const values = [];

    // Add filters dynamically
    if (filters.id) {
      query += ' AND id = ?';
      values.push(filters.id);
    }
    
    if (filters.name) {
      query += ' AND name LIKE ?';
      values.push(`%${filters.name}%`);
    }
    
    if (filters.status) {
      query += ' AND status = ?';
      values.push(filters.status);
    }
    
    if (filters.parent_id) {
      query += ' AND parent_id = ?';
      values.push(filters.parent_id);
    }
    
    // Sorting
    if (filters.sortBy) {
      query += ` ORDER BY ${filters.sortBy}`;
      query += filters.sortOrder === 'desc' ? ' DESC' : ' ASC';
    }
    
    // Pagination
    if (filters.limit) {
      query += ' LIMIT ?';
      values.push(parseInt(filters.limit));
      
      if (filters.offset) {
        query += ' OFFSET ?';
        values.push(parseInt(filters.offset));
      }
    }

    const [rows] = await db.execute(query, values);
    return rows;
  }
}

module.exports = Category;