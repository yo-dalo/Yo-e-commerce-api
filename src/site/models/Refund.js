const db = require("../config/db");

class Refund {
    static async getAll({ page = 1, limit = 10, sortBy = "processed_at", order = "DESC" }) {
        const offset = (page - 1) * limit;
        const validSortBy = ["processed_at", "refund_amount", "status"];
        const validOrder = ["ASC", "DESC"];

        if (!validSortBy.includes(sortBy)) sortBy = "processed_at";
        if (!validOrder.includes(order)) order = "DESC";

        const query = `SELECT * FROM refunds ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`;
        const [results] = await db.execute(query, [limit, offset]);
        return results;
    }

    static async getById(id) {
        const query = "SELECT * FROM refunds WHERE id = ?";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }

    static async getByIdForUpdate(id) {
        return this.getById(id);
    }

    static async create({ return_id, payment_id, refund_amount, status }) {
        const query = `INSERT INTO refunds (return_id, payment_id, refund_amount, status) 
                       VALUES (?, ?, ?, ?)`;
        const [result] = await db.execute(query, [return_id, payment_id, refund_amount, status]);
        return result.insertId;
    }

    static async update(id, { return_id, payment_id, refund_amount, status }) {
        const query = `UPDATE refunds SET return_id = ?, payment_id = ?, refund_amount = ?, status = ? 
                       WHERE id = ?`;
        const [result] = await db.execute(query, [return_id, payment_id, refund_amount, status, id]);
        return result.affectedRows;
    }

static async totel() {
        const query = `SELECT COUNT(*) AS total_refunds FROM refunds;`;
        
        const [row]=  await db.execute(query);
      return row;
    }



    static async delete(id) {
        const query = "DELETE FROM refunds WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
}

module.exports = Refund;
