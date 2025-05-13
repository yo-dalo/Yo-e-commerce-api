const db = require('../../config/db'); // Assuming you have a database config

class Poster {
  static async findAll() {
    try {
      const [rows] = await db.query('SELECT id, index_no,title ,url,heading,img FROM posters WHERE status = "ACTIVE" ORDER BY index_no ASC');
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async findById(id) {
    try {
      const [rows] = await db.query('SELECT id, index_no,title ,url,heading,img FROM posters WHERE id = ? AND status = "ACTIVE"', [id]);
      return rows[0] || null;
    } catch (error) {
      throw error;
    }
  }

  static async findByUrl(url) {
    try {
      const [rows] = await db.query('SELECT id, index_no,title ,url,heading,img FROM posters WHERE url = ? AND status = "ACTIVE"', [url]);
      return rows[0] || null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Poster;