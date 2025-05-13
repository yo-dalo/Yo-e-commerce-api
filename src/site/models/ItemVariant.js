const db = require('../../config/db');

class ItemVariant {
  static async findByItemId(itemId) {
    try {
      const query = `
        SELECT iv.*, 
               s.name as size_name, s.code as size_code,
               c.name as color_name, c.code as color_code, c.hex as color_hex
        FROM item_variants iv
        LEFT JOIN sizes s ON iv.size_id = s.id
        LEFT JOIN colors c ON iv.color_id = c.id
        WHERE iv.item_id = ?
      `;
      const [rows] = await db.query(query, [itemId]);
      return rows;
    } catch (error) {
      throw new Error(`Failed to fetch item variants: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const query = `
        SELECT iv.*, 
               s.name as size_name, s.code as size_code,
               c.name as color_name, c.code as color_code, c.hex as color_hex
        FROM item_variants iv
        LEFT JOIN sizes s ON iv.size_id = s.id
        LEFT JOIN colors c ON iv.color_id = c.id
        WHERE iv.id = ?
      `;
      const [rows] = await db.query(query, [id]);
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Failed to fetch item variant by ID: ${error.message}`);
    }
  }
}

module.exports = ItemVariant;