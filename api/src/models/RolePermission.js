const db = require('../config/db');

const RolePermission = {
  create: (data) => {
    const sql = `INSERT INTO role_permissions (role_id, permission_id, created_by, updated_by) VALUES (?, ?, ?, ?)`;
    const params = [data.role_id, data.permission_id, data.created_by, data.updated_by];
    return db.query(sql, params);
  },

  findAll: () => {
    const sql = `SELECT * FROM role_permissions`;
    return db.query(sql);
  },

  findById: (id) => {
    const sql = `SELECT * FROM role_permissions WHERE id = ?`;
    return db.query(sql, [id]);
  },

  update: (id, data) => {
    const sql = `UPDATE role_permissions SET role_id = ?, permission_id = ?, updated_by = ? WHERE id = ?`;
    const params = [data.role_id, data.permission_id, data.updated_by, id];
    return db.query(sql, params);
  },

  delete: (id) => {
    const sql = `DELETE FROM role_permissions WHERE id = ?`;
    return db.query(sql, [id]);
  }
};

module.exports = RolePermission;
