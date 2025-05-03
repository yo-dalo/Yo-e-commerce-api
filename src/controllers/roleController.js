const roleService = require('../services/roleService');
const { successResponse, errorResponse } = require('../utils/response');

const getAllRoles = async (req, res) => {
    try {
        const roles = await roleService.getAllRoles(req.query);
        successResponse(res, 'Roles fetched successfully', roles);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getRoleById = async (req, res) => {
    try {
        const role = await roleService.getRoleById(req.params.id);
        if (!role) return errorResponse(res, 'Role not found', 404);
        successResponse(res, 'Role fetched successfully', role);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getRoleByIdForUpdate = async (req, res) => {
    try {
        const role = await roleService.getRoleByIdForUpdate(req.params.id);
        if (!role) return errorResponse(res, 'Role not found', 404);
        successResponse(res, 'Role fetched for update', role);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const createRole = async (req, res) => {
  // console.log(req.body);
    try {
        const id = await roleService.createRole(req.body);
        successResponse(res, 'Role created successfully', { id });
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const updateRole = async (req, res) => {
    try {
        await roleService.updateRole(req.params.id, req.body);
        successResponse(res, 'Role updated successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const deleteRole = async (req, res) => {
    try {
        await roleService.deleteRole(req.params.id);
        successResponse(res, 'Role deleted successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

module.exports = {
    getAllRoles,
    getRoleById,
    getRoleByIdForUpdate,
    createRole,
    updateRole,
    deleteRole
};
