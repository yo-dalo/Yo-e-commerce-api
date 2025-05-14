const db = require('../config/db');

class ItemVariant {
    // Get all item variants with pagination and sorting
    static async getAll({ page = 1, limit = 10, sortBy = 'price', order = 'ASC' }) {
        const offset = (page - 1) * limit;
        const validSortBy = ['price', 'stock', 'created_at'];
        const validOrder = ['ASC', 'DESC'];

        if (!validSortBy.includes(sortBy)) sortBy = 'price';
        if (!validOrder.includes(order)) order = 'ASC';

        const query = `
            SELECT iv.*, 
                   i.name AS item_name, 
                   s.size AS size_name, 
                   c.color AS color_name 
            FROM item_variants iv
            LEFT JOIN items i ON iv.item_id = i.id
            LEFT JOIN sizes s ON iv.size_id = s.id
            LEFT JOIN colors c ON iv.color_id = c.id
            ORDER BY ${sortBy} ${order}
            LIMIT ? OFFSET ?
        `;
        const [itemVariants] = await db.execute(query, [limit, offset]);
        return itemVariants;
    }

    // Get item variant by ID
    static async getById(id) {
        const query = `
            SELECT iv.*, 
                   i.name AS item_name, 
                   s.size AS size_name, 
                   c.color AS color_name 
            FROM item_variants iv
            LEFT JOIN items i ON iv.item_id = i.id
            LEFT JOIN sizes s ON iv.size_id = s.id
            LEFT JOIN colors c ON iv.color_id = c.id
            WHERE iv.id = ?
        `;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }
    
    static async getByItemId(id) {
        const query = `
                        SELECT iv.*, 
                   i.name AS item_name, 
                   s.size AS size_name, 
                   c.color AS color_name 
            FROM item_variants iv
            LEFT JOIN items i ON iv.item_id = i.id
            LEFT JOIN sizes s ON iv.size_id = s.id
            LEFT JOIN colors c ON iv.color_id = c.id
            WHERE i.id = ?
        `;
        const [rows] = await db.execute(query, [id]);
        return rows;
    }

    // Get item variant by ID for update
    static async getByIdForUpdate(id) {
        const query = `SELECT * FROM item_variants WHERE id = ?`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }
    
    static async getAllByItemIdForUpdate(id) {
        const query = `
                        SELECT iv.*, 
                  
                   i.name AS item_name, 
                   s.size AS size_name, 
                   c.color AS color_name 
            FROM item_variants iv
            LEFT JOIN items i ON iv.item_id = i.id
            LEFT JOIN sizes s ON iv.size_id = s.id
            LEFT JOIN colors c ON iv.color_id = c.id
            WHERE i.id = ?
        `;
        const [rows] = await db.execute(query, [id]);
        return rows;
    }







    // Create new item variant
    static async create({ item_id, size_id, color_id, stock, low_stock_threshold, price, status }) {
      console.log(item_id, size_id, color_id, stock, low_stock_threshold, price, status);
      
        const query = `
            INSERT INTO item_variants (item_id, size_id, color_id, stock, low_stock_threshold, price, status)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const [result] = await db.execute(query, [
            item_id, size_id, color_id, stock, low_stock_threshold, price, status
        ]);
        return result.insertId;
    }

    // Update item variant by ID
    static async update(id, { item_id, size_id, color_id, stock, low_stock_threshold, price, status }) {
        const query = `
            UPDATE item_variants
            SET item_id = ?, size_id = ?, color_id = ?, stock = ?, low_stock_threshold = ?, price = ?, status = ?
            WHERE id = ?
        `;
        await db.execute(query, [
            item_id, size_id, color_id, stock, low_stock_threshold, price, status, id
        ]);
    }

    // Delete item variant by ID
    static async delete(id) {
        const query = `DELETE FROM item_variants WHERE id = ?`;
        await db.execute(query, [id]);
    }
}

module.exports = ItemVariant;
