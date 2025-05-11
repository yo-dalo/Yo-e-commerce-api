const db = require('../config/db'); // Assuming db is exported from config/db.js

const Poster = {
  create: (img,data) => {
    const sql = `INSERT INTO posters (index_no, img, title, heading, url, created_by, status) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [data.index_no, img, data.title, data.heading, data.url, data.created_by, data.status || 'ACTIVE'];
    return db.query(sql, params);
  },

  findAll: () => {
    const sql = `SELECT * FROM posters ORDER BY index_no ASC`;
    return db.query(sql);
  },

  findById: (id) => {
    const sql = `SELECT * FROM posters WHERE id = ?`;
    return db.query(sql, [id]);
  },



 async getImgById(id) {
    const query = `
        SELECT img FROM posters
        WHERE id = ?
    `;
    const [rows] = await db.execute(query, [id]);
    return rows.length ? rows[0]?.img : null;
}
,


  findByIdForUpdate: (id) => {
    const sql = `SELECT id, index_no, img, title, heading, url, status FROM posters WHERE id = ?`;
    return db.query(sql, [id]);
  },

  update: (id,img, data) => {
    const sql = `UPDATE posters SET index_no = ?, img = ?, title = ?, heading = ?, url = ?, status = ? WHERE id = ?`;
    const params = [data.index_no, img, data.title, data.heading, data.url, data.status, id];
    return db.query(sql, params);
  },
  updateWithoutImg: (id, data) => {
    const sql = `UPDATE posters SET index_no = ?, title = ?, heading = ?, url = ?, status = ? WHERE id = ?`;
    const params = [data.index_no, data.title, data.heading, data.url, data.status, id];
    return db.query(sql, params);
  },

  delete: (id) => {
    const sql = `DELETE FROM posters WHERE id = ?`;
    return db.query(sql, [id]);
  },



getAllX: () => {
    const sql = `SELECT id, index_no, img, title, heading, url, status FROM posters WHERE status = 'ACTIVE' ORDER BY index_no ASC`;
    return db.query(sql);
  }
};




module.exports = Poster;
