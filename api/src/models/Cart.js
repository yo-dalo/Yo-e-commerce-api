const db = require("../config/db");

class Cart {
    static async getAll({ page = 1, limit = 10, sortBy = "created_at", order = "DESC" }) {
        const offset = (page - 1) * limit;
        const validSortBy = ["created_at", "updated_at", "expires_at"];
        const validOrder = ["ASC", "DESC"];

        if (!validSortBy.includes(sortBy)) sortBy = "created_at";
        if (!validOrder.includes(order)) order = "DESC";

        const query = `SELECT * FROM cart ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`;
        const [results] = await db.execute(query, [limit, offset]);
        return results;
    }

    static async getById(id) {
        const query = "SELECT * FROM cart WHERE id = ?";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }

    static async getByIdForUpdate(id) {
        return this.getById(id);
    }

    static async create({ user_id, item_variant_id, quantity }) {
        const query = `INSERT INTO cart (user_id, item_variant_id, quantity) 
                       VALUES (?, ?, ?)`;
        const [result] = await db.execute(query, [user_id, item_variant_id, quantity]);
        return result.insertId;
    }

    static async update(id, { user_id, item_variant_id, quantity }) {
        const query = `UPDATE cart SET user_id = ?, item_variant_id = ?, quantity = ? 
                       WHERE id = ?`;
        const [result] = await db.execute(query, [user_id, item_variant_id, quantity, id]);
        return result.affectedRows;
    }

    static async delete(id) {
        const query = "DELETE FROM cart WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
}

module.exports = Cart;
