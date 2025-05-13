const adminService = require('../services/adminService');
const { successResponse, errorResponse } = require('../utils/response'); // Assuming you have response helpers

const adminController = {
  create: async (req, res) => {
    
    try {
      const admin = await adminService.createAdmin(req.file?.filename,req.body);
      successResponse(res, 'Admin created successfully',admin);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  getAll: async (req, res) => {
    try {
      const admins = await adminService.getAllAdmins();
      successResponse(res, 'Admins fetched successfully',admins);
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
      successResponse(res,  'Admin fetched successfully',admin);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  update: async (req, res) => {
    try {
      await adminService.updateAdmin(req.params.id,req.file?.filename, req.body);
      successResponse(res,  'Admin updated successfully',null,);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  delete: async (req, res) => {
    try {
      await adminService.deleteAdmin(req.params.id);
      successResponse(res,  'Admin deleted successfully',null,);
    } catch (error) {
      errorResponse(res, error);
    }
  }
};

module.exports = adminController;
