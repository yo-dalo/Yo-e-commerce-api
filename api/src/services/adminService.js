const Admin = require('../models/Admin');

const adminService = {
  createAdmin: async (data) => {
    const [result] = await Admin.create(data);
    return result;
  },

  getAllAdmins: async () => {
    const [rows] = await Admin.findAll();
    return rows;
  },

  getAdminById: async (id) => {
    const [rows] = await Admin.findById(id);
    return rows[0];
  },

  updateAdmin: async (id, data) => {
    const [result] = await Admin.update(id, data);
    return result;
  },

  deleteAdmin: async (id) => {
    const [result] = await Admin.delete(id);
    return result;
  }
};

module.exports = adminService;
