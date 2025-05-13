const db = require("../config/db");

class Wishlist {
    static async getAll({ page = 1, limit = 10, sortBy = "created_at", order = "DESC" }) {
        const offset = (page - 1) * limit;
        const validSortBy = ["created_at", "user_id", "item_id"];
        const validOrder = ["ASC", "DESC"];

        if (!validSortBy.includes(sortBy)) sortBy = "created_at";
        if (!validOrder.includes(order)) order = "DESC";

        const query = `SELECT * FROM wishlist ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`;
        const [wishlists] = await db.execute(query, [limit, offset]);
        return wishlists;
    }

    static async getById(id) {
        const query = "SELECT * FROM wishlist WHERE id = ?";
        const [wishlist] = await db.execute(query, [id]);
        return wishlist.length ? wishlist[0] : null;
    }

    static async getByIdForUpdate(id) {
        return this.getById(id);
    }

    static async create({ user_id, item_id }) {
        const query = "INSERT INTO wishlist (user_id, item_id) VALUES (?, ?)";
        const [result] = await db.execute(query, [user_id, item_id]);
        return result.insertId;
    }

    static async update(id, { user_id, item_id }) {
        const query = "UPDATE wishlist SET user_id = ?, item_id = ? WHERE id = ?";
        const [result] = await db.execute(query, [user_id, item_id, id]);
        return result.affectedRows;
    }

    static async delete(id) {
        const query = "DELETE FROM wishlist WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
}

module.exports = Wishlist;
