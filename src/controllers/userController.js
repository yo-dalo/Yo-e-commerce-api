const userService = require('../services/userService');
const { successResponse, errorResponse } = require('../utils/response');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers(req.query);
        successResponse(res, 'Users fetched successfully', users);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) return errorResponse(res, 'User not found', 404);
        successResponse(res, 'User fetched successfully', user);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getUserByIdForUpdate = async (req, res) => {
    try {
        const user = await userService.getUserByIdForUpdate(req.params.id);
        if (!user) return errorResponse(res, 'User not found', 404);
        successResponse(res, 'User fetched for update', user);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const createUser = async (req, res) => {
    try {
        const id = await userService.createUser(req.body);
        successResponse(res, 'User created successfully', { id });
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const updateUser = async (req, res) => {
    try {
        await userService.updateUser(req.params.id, req.body);
        successResponse(res, 'User updated successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.id);
        successResponse(res, 'User deleted successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByIdForUpdate,
    createUser,
    updateUser,
    deleteUser
};
