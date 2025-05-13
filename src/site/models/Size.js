const db = require('../config/db');

class Size {
    // Get all sizes with pagination and sorting
    static async getAll({ page = 1, limit = 10, sortBy = 'size', order = 'ASC' }) {
        const offset = (page - 1) * limit;
        const validSortBy = ['size', 'status', 'created_at'];
        const validOrder = ['ASC', 'DESC'];

        if (!validSortBy.includes(sortBy)) sortBy = 'size';
        if (!validOrder.includes(order)) order = 'ASC';

        const query = `
            SELECT *
            FROM sizes
            ORDER BY ${sortBy} ${order}
            LIMIT ? OFFSET ?
        `;
        const [sizes] = await db.execute(query, [limit, offset]);
        return sizes;
    }

    // Get size by ID
    static async getById(id) {
        const query = `SELECT * FROM sizes WHERE id = ?`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    // Get size by ID for update
    static async getByIdForUpdate(id) {
        const query = `
            SELECT *
            FROM sizes
            WHERE id = ?
        `;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    // Create new size
    static async create({ size, status, created_by }) {
        const query = `
            INSERT INTO sizes (size, status, created_by)
            VALUES (?, ?, ?)
        `;
        const [result] = await db.execute(query, [size, status, created_by]);
        return result.insertId;
    }

    // Update size by ID
    static async update(id, { size, status, updated_by }) {
        const query = `
            UPDATE sizes
            SET size = ?, status = ?, updated_by = ?
            WHERE id = ?
        `;
        await db.execute(query, [size, status, updated_by, id]);
    }

static async totel() {
        const query = `SELECT COUNT(*) AS total_sizes FROM sizes;`;
        
        const [row]=  await db.execute(query);
      return row;
    }




    // Delete size by ID
    static async delete(id) {
        const query = `DELETE FROM sizes WHERE id = ?`;
        await db.execute(query, [id]);
    }
}

module.exports = Size;
