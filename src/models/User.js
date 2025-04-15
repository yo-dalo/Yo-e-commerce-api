const db = require('../config/db');

class User {
    // Get all users with pagination and sorting
    static async getAll({ page = 1, limit = 10, sortBy = 'name', order = 'ASC' }) {
        const offset = (page - 1) * limit;
        const validSortBy = ['name', 'email', 'status', 'created_at'];
        const validOrder = ['ASC', 'DESC'];

        if (!validSortBy.includes(sortBy)) sortBy = 'name';
        if (!validOrder.includes(order)) order = 'ASC';

        const query = `
            SELECT u.*, r.role_name 
            FROM users u
            LEFT JOIN roles r ON u.role_id = r.id
            WHERE u.deleted_at IS NULL
            ORDER BY ${sortBy} ${order}
            LIMIT ? OFFSET ?
        `;
  
