const db = require("../config/db");

class Return {
    static async getAll({ page = 1, limit = 10, sortBy = "created_at", order = "DESC" }) {
        const offset = (page - 1) * limit;
        const validSortBy = ["created_at", "status"];
        const validOrder = ["ASC", "DESC"];

        if (!validSortBy.includes(sortBy)) sortBy = "created_at";
        if (!validOrder.includes(order)) order = "DESC";

        const query = `SELECT * FROM returns ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`;
        const [results] = await db.execute(query, [limit, offset]);
        return results;
    }

    static async getById(id) {
        const query = "SELECT * FROM returns WHERE id = ?";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }

    static async getByIdForUpdate(id) {
        return this.getById(id);
    }

    static async create({ order_id, user_id, reason, status }) {
        const query = `INSERT INTO returns (order_id, user_id, reason, status) 
                       VALUES (?, ?, ?, ?)`;
        const [result] = await db.execute(query, [order_id, user_id, reason, status]);
        return result.insertId;
    }

    static async update(id, { order_id, user_id, reason, status }) {
        const query = `UPDATE returns SET order_id = ?, user_id = ?, reason = ?, status = ? 
                       WHERE id = ?`;
        const [result] = await db.execute(query, [order_id, user_id, reason, status, id]);
        return result.affectedRows;
    }

static async totel() {
        const query = `SELECT COUNT(*) AS total_returns FROM returns;`;
        
        const [row]=  await db.execute(query);
      return row;
    }




    static async delete(id) {
        const query = "DELETE FROM returns WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
}

module.exports = Return;
