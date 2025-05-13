const db = require("../config/db");

class CouponUsage {
    static async getAll({ page = 1, limit = 10, sortBy = "used_at", order = "DESC" }) {
        const offset = (page - 1) * limit;
        const validSortBy = ["used_at", "user_id", "coupon_id", "order_id"];
        const validOrder = ["ASC", "DESC"];

        if (!validSortBy.includes(sortBy)) sortBy = "used_at";
        if (!validOrder.includes(order)) order = "DESC";

        const query = `SELECT * FROM coupon_usage ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`;
        const [results] = await db.execute(query, [limit, offset]);
        return results;
    }

    static async getById(id) {
        const query = "SELECT * FROM coupon_usage WHERE id = ?";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }

    static async getByIdForUpdate(id) {
        return this.getById(id);
    }

    static async create({ user_id, coupon_id, order_id }) {
        const query = `INSERT INTO coupon_usage (user_id, coupon_id, order_id) VALUES (?, ?, ?)`;
        const [result] = await db.execute(query, [user_id, coupon_id, order_id]);
        return result.insertId;
    }

    static async update(id, { user_id, coupon_id, order_id }) {
        const query = `UPDATE coupon_usage SET user_id = ?, coupon_id = ?, order_id = ? WHERE id = ?`;
        const [result] = await db.execute(query, [user_id, coupon_id, order_id, id]);
        return result.affectedRows;
    }

    static async delete(id) {
        const query = "DELETE FROM coupon_usage WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
}

module.exports = CouponUsage;
