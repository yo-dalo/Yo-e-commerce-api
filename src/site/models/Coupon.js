const db = require("../config/db");

class Coupon {
    static async getAll({ page = 1, limit = 10, sortBy = "created_at", order = "DESC" }) {
        const offset = (page - 1) * limit;
        const validSortBy = ["created_at", "code", "discount_percentage", "valid_from", "valid_to"];
        const validOrder = ["ASC", "DESC"];

        if (!validSortBy.includes(sortBy)) sortBy = "created_at";
        if (!validOrder.includes(order)) order = "DESC";

        const query = `SELECT * FROM coupons ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`;
        const [results] = await db.execute(query, [limit, offset]);
        return results;
    }

    static async getById(id) {
        const query = "SELECT * FROM coupons WHERE id = ?";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }

    static async getByIdForUpdate(id) {
        return this.getById(id);
    }

    static async create({ code, discount_percentage, max_discount_amount, min_order_amount, valid_from, valid_to, status }) {
        const query = `INSERT INTO coupons (code, discount_percentage, max_discount_amount, min_order_amount, valid_from, valid_to, status) 
                       VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const [result] = await db.execute(query, [code, discount_percentage, max_discount_amount, min_order_amount, valid_from, valid_to, status]);
        return result.insertId;
    }

    static async update(id, { code, discount_percentage, max_discount_amount, min_order_amount, valid_from, valid_to, status }) {
        const query = `UPDATE coupons SET code = ?, discount_percentage = ?, max_discount_amount = ?, min_order_amount = ?, valid_from = ?, valid_to = ?, status = ? 
                       WHERE id = ?`;
        const [result] = await db.execute(query, [code, discount_percentage, max_discount_amount, min_order_amount, valid_from, valid_to, status, id]);
        return result.affectedRows;
    }
    
    
    static async totel() {
        const query = `SELECT COUNT(*) AS total_coupons FROM coupons;`;
        
        await db.execute(query);
    }
    

    static async delete(id) {
        const query = "DELETE FROM coupons WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
}

module.exports = Coupon;
