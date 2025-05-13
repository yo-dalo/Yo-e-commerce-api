const db = require('../config/db');

const OrderItem = {
  create: (data) => {
    const sql = `INSERT INTO order_items (order_id, item_variant_id, quantity, price) VALUES (?, ?, ?, ?)`;
    return db.query(sql, [data.order_id, data.item_variant_id, data.quantity, data.price]);
  },

  findAll: () => {
    const sql = `SELECT * FROM order_items ORDER BY id DESC`;
    return db.query(sql);
  },

  findById: (id) => {
    const sql = `SELECT * FROM order_items WHERE id = ?`;
    return db.query(sql, [id]);
  },

  update: (id, data) => {
    const sql = `UPDATE order_items SET order_id = ?, item_variant_id = ?, quantity = ?, price = ? WHERE id = ?`;
    return db.query(sql, [data.order_id, data.item_variant_id, data.quantity, data.price, id]);
  },

  delete: (id) => {
    const sql = `DELETE FROM order_items WHERE id = ?`;
    return db.query(sql, [id]);
  }
};

module.exports = OrderItem;
