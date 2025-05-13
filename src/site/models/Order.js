const db = require("../config/db");

class Order {
    static async getAll({ page = 1, limit = 10, sortBy = "created_at", order = "DESC" }) {
        const offset = (page - 1) * limit;
        const validSortBy = ["created_at", "updated_at", "status"];
        const validOrder = ["ASC", "DESC"];

        if (!validSortBy.includes(sortBy)) sortBy = "created_at";
        if (!validOrder.includes(order)) order = "DESC";

        const query = `SELECT * FROM orders ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`;
        const [results] = await db.execute(query, [limit, offset]);
        return results;
    }

    static async getById(id) {
        const query = "SELECT * FROM orders WHERE id = ?";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }

    static async getByIdForUpdate(id) {
        return this.getById(id);
    }

    static async create({ user_id, payment_id, status, payment_mode, shipping_id }) {
        const query = `INSERT INTO orders (user_id, payment_id, status, payment_mode, shipping_id) 
                       VALUES (?, ?, ?, ?, ?)`;
        const [result] = await db.execute(query, [user_id, payment_id, status, payment_mode, shipping_id]);
        return result.insertId;
    }

    static async update(id, { user_id, payment_id, status, payment_mode, shipping_id }) {
        const query = `UPDATE orders SET user_id = ?, payment_id = ?, status = ?, payment_mode = ?, shipping_id = ? 
                       WHERE id = ?`;
        const [result] = await db.execute(query, [user_id, payment_id, status, payment_mode, shipping_id, id]);
        return result.affectedRows;
    }



static async totel() {
        const query = `SELECT COUNT(*) AS total_orders FROM orders;`;
        
        const [row]=  await db.execute(query);
      return row;
    }



    static async delete(id) {
        const query = "DELETE FROM orders WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
}

module.exports = Order;
