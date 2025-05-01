const db = require("../config/db");

class Payment {
    static async getAll({ page = 1, limit = 10, sortBy = "created_at", order = "DESC" }) {
        const offset = (page - 1) * limit;
        const validSortBy = ["created_at", "order_amount", "payment_status"];
        const validOrder = ["ASC", "DESC"];

        if (!validSortBy.includes(sortBy)) sortBy = "created_at";
        if (!validOrder.includes(order)) order = "DESC";

        const query = `SELECT * FROM payments ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`;
        const [results] = await db.execute(query, [limit, offset]);
        return results;
    }

    static async getById(id) {
        const query = "SELECT * FROM payments WHERE id = ?";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }

    static async getByIdForUpdate(id) {
        return this.getById(id);
    }

    static async create({ order_id, order_amount, order_currency, payment_status }) {
        const query = `INSERT INTO payments (order_id, order_amount, order_currency, payment_status) 
                       VALUES (?, ?, ?, ?)`;
        const [result] = await db.execute(query, [order_id, order_amount, order_currency, payment_status]);
        return result.insertId;
    }

    static async update(id, { order_id, order_amount, order_currency, payment_status }) {
        const query = `UPDATE payments SET order_id = ?, order_amount = ?, order_currency = ?, payment_status = ? 
                       WHERE id = ?`;
        const [result] = await db.execute(query, [order_id, order_amount, order_currency, payment_status, id]);
        return result.affectedRows;
    }
    
    static async totel() {
        const query = `SELECT COUNT(*) AS total_payments FROM payments;`;
        
        const [row]=  await db.execute(query);
      return row;
    }

    static async delete(id) {
        const query = "DELETE FROM payments WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
}

module.exports = Payment;
