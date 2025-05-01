const db = require('../config/db');

const Permission = {
  create: (data) => {
    const sql = `INSERT INTO permissions (name, display_name, description) VALUES (?, ?, ?)`;
    return db.query(sql, [data.name, data.display_name, data.description]);
  },

  findAll: () => {
    const sql = `SELECT * FROM permissions ORDER BY id DESC`;
    return db.query(sql);
  },

  findById: (id) => {
    const sql = `SELECT * FROM permissions WHERE id = ?`;
    return db.query(sql, [id]);
  },

  update: (id, data) => {
    const sql = `UPDATE permissions SET name = ?, display_name = ?, description = ? WHERE id = ?`;
    return db.query(sql, [data.name, data.display_name, data.description, id]);
  },

  delete: (id) => {
    const sql = `DELETE FROM permissions WHERE id = ?`;
    return db.query(sql, [id]);
  }
};

module.exports = Permission;
