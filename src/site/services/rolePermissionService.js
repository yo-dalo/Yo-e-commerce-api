const RolePermission = require('../models/RolePermission');

const rolePermissionService = {
  create: async (data) => {
    const [result] = await RolePermission.create(data);
    return result;
  },

  getAll: async () => {
    const [rows] = await RolePermission.findAll();
    return rows;
  },

  getById: async (id) => {
    const [rows] = await RolePermission.findById(id);
    return rows[0];
  },

  update: async (id, data) => {
    const [result] = await RolePermission.update(id, data);
    return result;
  },

  delete: async (id) => {
    const [result] = await RolePermission.delete(id);
    return result;
  }
};

module.exports = rolePermissionService;
