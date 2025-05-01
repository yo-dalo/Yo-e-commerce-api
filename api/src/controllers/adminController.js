const adminService = require('../services/adminService');
const { successResponse, errorResponse } = require('../utils/response'); // Assuming you have response helpers

const adminController = {
  create: async (req, res) => {
    try {
      const admin = await adminService.createAdmin(req.body);
      successResponse(res, admin, 'Admin created successfully');
    } catch (error) {
      errorResponse(res, error);
    }
  },

  getAll: async (req, res) => {
    try {
      const admins = await adminService.getAllAdmins();
      successResponse(res, admins, 'Admins fetched successfully');
    } catch (error) {
      errorResponse(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const admin = await adminService.getAdminById(req.params.id);
      if (!admin) {
        return errorResponse(res, 'Admin not found', 404);
      }
      successResponse(res, admin, 'Admin fetched successfully');
    } catch (error) {
      errorResponse(res, error);
    }
  },

  update: async (req, res) => {
    try {
      await adminService.updateAdmin(req.params.id, req.body);
      successResponse(res, null, 'Admin updated successfully');
    } catch (error) {
      errorResponse(res, error);
    }
  },

  delete: async (req, res) => {
    try {
      await adminService.deleteAdmin(req.params.id);
      successResponse(res, null, 'Admin deleted successfully');
    } catch (error) {
      errorResponse(res, error);
    }
  }
};

module.exports = adminController;
