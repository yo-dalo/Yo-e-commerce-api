const db = require('../config/db');

class Category {
    // Get all categories with pagination and sorting
    static async getAll({ page = 1, limit = 10, sortBy = 'name', order = 'ASC' }) {
        const offset = (page - 1) * limit;
        const validSortBy = ['name', 'status', 'created_at'];
        const validOrder = ['ASC', 'DESC'];

        if (!validSortBy.includes(sortBy)) sortBy = 'name';
        if (!validOrder.includes(order)) order = 'ASC';

        const query = `
            SELECT *
            FROM categories
            ORDER BY ${sortBy} ${order}
            LIMIT ? OFFSET ?
        `;
        const [categories] = await db.execute(query, [limit, offset]);
        return categories;
    }

    // Get category by ID
    static async getById(id) {
        const query = `
            SELECT * FROM categories
            WHERE id = ?
        `;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    // Get category by ID for update
    static async getByIdForUpdate(id) {
        const query = `SELECT * FROM categories WHERE id = ?`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    // Create new category
    static async create(img,{ name, slug, status, created_by }) {
      console.log(name, slug, status, created_by ,img);
        const query = `
            INSERT INTO categories (name, slug, img, status, created_by)
            VALUES (?, ?, ?, ?, ?)
        `;
        const [result] = await db.execute(query, [
            name, slug, img, status, created_by
        ]);
        return result.insertId;
    }

    // Update category by ID
    static async update(id, img,{ name, slug, status, updated_by }) {
        const query = `
            UPDATE categories
            SET name = ?, slug = ?, img = ?, status = ?, updated_by = ?
            WHERE id = ?
        `;
        await db.execute(query, [
            name, slug, img, status, updated_by, id
        ]);
    }

    // Delete category by ID
    static async delete(id) {
        const query = `DELETE FROM categories WHERE id = ?`;
        await db.execute(query, [id]);
    }
}

module.exports = Category;
