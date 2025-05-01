const db = require('../config/db'); // Assuming db is exported from config/db.js

const Admin = {
  create: (data) => {
    const sql = `INSERT INTO admins (name, phone, email, img, password, status, role_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [data.name, data.phone, data.email, data.img, data.password, data.status || 'ACTIVE', data.role_id];
    return db.query(sql, params);
  },

  findAll: () => {
    const sql = `SELECT * FROM admins ORDER BY name ASC`;
    return db.query(sql);
  },

  findById: (id) => {
    const sql = `SELECT * FROM admins WHERE id = ?`;
    return db.query(sql, [id]);
  },

  update: (id, data) => {
    const sql = `UPDATE admins SET name = ?, phone = ?, email = ?, img = ?, password = ?, status = ?, role_id = ? WHERE id = ?`;
    const params = [data.name, data.phone, data.email, data.img, data.password, data.status, data.role_id, id];
    return db.query(sql, params);
  },

  delete: (id) => {
    const sql = `DELETE FROM admins WHERE id = ?`;
    return db.query(sql, [id]);
  }
};

module.exports = Admin;
