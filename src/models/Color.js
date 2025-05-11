const db = require('../config/db');

class Color {
    // Get all colors with pagination and sorting
    static async getAll({ page = 1, limit = 10, sortBy = 'color', order = 'ASC' }) {
        const offset = (page - 1) * limit;
        const validSortBy = ['color', 'status', 'created_at'];
        const validOrder = ['ASC', 'DESC'];

        if (!validSortBy.includes(sortBy)) sortBy = 'color';
        if (!validOrder.includes(order)) order = 'ASC';

        const query = `
            SELECT *
            FROM colors
            ORDER BY ${sortBy} ${order}
            LIMIT ? OFFSET ?
        `;
        const [colors] = await db.execute(query, [limit, offset]);
        return colors;
    }

    // Get color by ID
    static async getById(id) {
        const query = `SELECT * FROM colors WHERE id = ?`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    // Get color by ID for update
    static async getByIdForUpdate(id) {
        const query = `
            SELECT *
            FROM colors
            WHERE id = ?
        `;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    // Create new color
    static async create({ color, status, created_by }) {
        const query = `
            INSERT INTO colors (color, status, created_by)
            VALUES (?, ?, ?)
        `;
        const [result] = await db.execute(query, [color, status, created_by]);
        return result.insertId;
    }

    // Update color by ID
    static async update(id, { color, status, updated_by }) {
        const query = `
            UPDATE colors
            SET color = ?, status = ?, updated_by = ?
            WHERE id = ?
        `;
        await db.execute(query, [color, status, updated_by, id]);
    }

static async totel() {
        const query = `SELECT COUNT(*) AS total_colors FROM colors;`;
        
        const [row]=  await db.execute(query);
      return row;
    }



    // Delete color by ID
    static async delete(id) {
        const query = `DELETE FROM colors WHERE id = ?`;
        await db.execute(query, [id]);
    }
    
    
    
    //for main website
    
    static async getByIdX(id) {
        const query = `SELECT color FROM colors WHERE id = ? AND status = 'ACTIVE'`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }
    static async getByItemVariantIdX(id) {
        const query = `SELECT c.color FROM 
        colors c LEFT JOIN item_variants iv ON iv.color_id = c.id
        WHERE iv.id = ? AND c.status = 'ACTIVE'`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }
    
    
    
    
    
    
    
    
    
}

module.exports = Color;
