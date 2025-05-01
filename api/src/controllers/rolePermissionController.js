const rolePermissionService = require('../services/rolePermissionService');
const { successResponse, errorResponse } = require('../utils/response');

const rolePermissionController = {
  create: async (req, res) => {
    try {
      const data = await rolePermissionService.create(req.body);
      successResponse(res, data, 'Role permission created successfully');
    } catch (error) {
      errorResponse(res, error);
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await rolePermissionService.getAll();
      successResponse(res, data, 'Role permissions fetched successfully');
    } catch (error) {
      errorResponse(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const data = await rolePermissionService.getById(req.params.id);
      if (!data) return errorResponse(res, 'Record not found', 404);
      successResponse(res, data, 'Role permission fetched successfully');
    } catch (error) {
      errorResponse(res, error);
    }
  },

  update: async (req, res) => {
    try {
      await rolePermissionService.update(req.params.id, req.body);
      successResponse(res, null, 'Role permission updated successfully');
    } catch (error) {
      errorResponse(res, error);
    }
  },

  delete: async (req, res) => {
    try {
      await rolePermissionService.delete(req.params.id);
      successResponse(res, null, 'Role permission deleted successfully');
    } catch (error) {
      errorResponse(res, error);
    }
  }
};

module.exports = rolePermissionController;
