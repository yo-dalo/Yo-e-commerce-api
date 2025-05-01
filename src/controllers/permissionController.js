const permissionService = require('../services/permissionService');
const { successResponse, errorResponse } = require('../utils/response');

const permissionController = {
  create: async (req, res) => {
    try {
      const result = await permissionService.createPermission(req.body);
      successResponse(res, 'Permission created successfully',result);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await permissionService.getAllPermissions();
      successResponse(res,  'Permissions fetched successfully',data);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const data = await permissionService.getPermissionById(req.params.id);
      if (!data) return errorResponse(res, 'Permission not found', 404);
      successResponse(res,  'Permission fetched successfully',data);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  update: async (req, res) => {
    try {
      await permissionService.updatePermission(req.params.id, req.body);
      successResponse(res, 'Permission updated successfully',null);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  delete: async (req, res) => {
    try {
      await permissionService.deletePermission(req.params.id);
      successResponse(res, null, 'Permission deleted successfully');
    } catch (error) {
      errorResponse(res, error);
    }
  }
};

module.exports = permissionController;
