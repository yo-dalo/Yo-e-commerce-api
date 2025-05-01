const Permission = require('../models/Permission');

const permissionService = {
  createPermission: async (data) => {
    const [result] = await Permission.create(data);
    return result;
  },

  getAllPermissions: async () => {
    const [rows] = await Permission.findAll();
    return rows;
  },

  getPermissionById: async (id) => {
    const [rows] = await Permission.findById(id);
    return rows[0];
  },

  updatePermission: async (id, data) => {
    const [result] = await Permission.update(id, data);
    return result;
  },

  deletePermission: async (id) => {
    const [result] = await Permission.delete(id);
    return result;
  }
};

module.exports = permissionService;
