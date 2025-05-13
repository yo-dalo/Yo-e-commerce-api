const db = require('../config/db');

class Role {
    // Get all roles with pagination and sorting
    static async getAll({ page = 1, limit = 10, sortBy = 'role_name', order = 'ASC' }) {
        const offset = (page - 1) * limit;
        const validSortBy = ['role_name', 'status', 'created_at'];
        const validOrder = ['ASC', 'DESC'];

        if (!validSortBy.includes(sortBy)) sortBy = 'role_name';
        if (!validOrder.includes(order)) order = 'ASC';

        const query = `
            SELECT *
            FROM roles
            ORDER BY ${sortBy} ${order}
            LIMIT ? OFFSET ?
        `;
        const [roles] = await db.execute(query, [limit, offset]);
        return roles;
    }

    // Get role by ID
    static async getById(id) {
        const query = `SELECT * FROM roles WHERE id = ?`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    // Get role by ID for update
    static async getByIdForUpdate(id) {
        const query = `SELECT * FROM roles WHERE id = ?`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    // Create new role
    static async create({ role_name, status , created_by }) {
        const query = `
            INSERT INTO roles (role_name, status,created_by)
            VALUES (?, ?, ?)
        `;
        const [result] = await db.execute(query, [role_name,  status, created_by]);
        return result.insertId;
    }

    // Update role by ID
    static async update(id, { role_name, status }) {
        const query = `
            UPDATE roles
            SET role_name = ?, status = ?
            WHERE id = ?
        `;
        await db.execute(query, [role_name, status, id]);
    }

    // Delete role by ID
    static async delete(id) {
        const query = `DELETE FROM roles WHERE id = ?`;
        await db.execute(query, [id]);
    }
}

module.exports = Role;
