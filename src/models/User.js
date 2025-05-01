const db = require('../config/db');

class UserModel {
  static async getAll() {
    const [users] = await db.query('SELECT * FROM users WHERE deleted_at IS NULL');
    return users;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ? AND deleted_at IS NULL', [id]);
    return rows[0];
  }
  static async getByName(name) {
    const [rows] = await db.query('SELECT * FROM users WHERE name = ? AND deleted_at IS NULL', [name]);
    return rows[0];
  }
  static async getByPhone(phone) {
    const [rows] = await db.query('SELECT * FROM users WHERE phone = ? AND deleted_at IS NULL', [phone]);
    return rows[0];
  }
  static async getByEmail(email) {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ? AND deleted_at IS NULL', [email]);
    return rows[0];
  }
  
  
  
  
  
  

  static async getByIdForUpdate(id) {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(data) {
    const { name, phone, email, password, status = 'ACTIVE' } = data;
    await db.query(
      `INSERT INTO users (name, phone, email, password, status) VALUES (?, ?, ?, ?, ?)`,
      [name, phone, email, password, status]
    );
  }

  static async update(id, data) {
    const { name, phone, email, password, status } = data;
    await db.query(
      `UPDATE users SET name = ?, phone = ?, email = ?, password = ?, status = ? WHERE id = ?`,
      [name, phone, email, password, status, id]
    );
  }

  static async softDelete(id) {
    await db.query('UPDATE users SET deleted_at = NOW() WHERE id = ?', [id]);
  }
}

module.exports = UserModel;
