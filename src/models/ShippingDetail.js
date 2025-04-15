const db = require("../config/db");

class ShippingDetails {
    static async getAll({ page = 1, limit = 10, sortBy = "created_at", order = "DESC" }) {
        const offset = (page - 1) * limit;
        const validSortBy = ["created_at", "order_id", "city", "state"];
        const validOrder = ["ASC", "DESC"];

        if (!validSortBy.includes(sortBy)) sortBy = "created_at";
        if (!validOrder.includes(order)) order = "DESC";

        const query = `SELECT * FROM shipping_details ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`;
        const [results] = await db.execute(query, [limit, offset]);
        return results;
    }

    static async getById(id) {
        const query = "SELECT * FROM shipping_details WHERE id = ?";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }

    static async getByIdForUpdate(id) {
        return this.getById(id);
    }

    static async create({ order_id, address, city, state, pincode, tracking_no, estimated_delivery_date }) {
        const query = `INSERT INTO shipping_details (order_id, address, city, state, pincode, tracking_no, estimated_delivery_date) 
                       VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const [result] = await db.execute(query, [order_id, address, city, state, pincode, tracking_no, estimated_delivery_date]);
        return result.insertId;
    }

    static async update(id, { order_id, address, city, state, pincode, tracking_no, estimated_delivery_date }) {
        const query = `UPDATE shipping_details SET order_id = ?, address = ?, city = ?, state = ?, pincode = ?, 
                       tracking_no = ?, estimated_delivery_date = ? WHERE id = ?`;
        const [result] = await db.execute(query, [order_id, address, city, state, pincode, tracking_no, estimated_delivery_date, id]);
        return result.affectedRows;
    }

    static async delete(id) {
        const query = "DELETE FROM shipping_details WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
}

module.exports = ShippingDetails;
