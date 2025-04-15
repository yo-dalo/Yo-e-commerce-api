const sizeService = require('../services/sizeService');
const { successResponse, errorResponse } = require('../utils/response');

const getAllSizes = async (req, res) => {
    try {
        const sizes = await sizeService.getAllSizes(req.query);
        successResponse(res, 'Sizes fetched successfully', sizes);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getSizeById = async (req, res) => {
    try {
        const size = await sizeService.getSizeById(req.params.id);
        if (!size) return errorResponse(res, 'Size not found', 404);
        successResponse(res, 'Size fetched successfully', size);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getSizeByIdForUpdate = async (req, res) => {
    try {
        const size = await sizeService.getSizeByIdForUpdate(req.params.id);
        if (!size) return errorResponse(res, 'Size not found', 404);
        successResponse(res, 'Size fetched successfully for update', size);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const createSize = async (req, res) => {
    try {
        const id = await sizeService.createSize(req.body);
        successResponse(res, 'Size created successfully', { id });
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const updateSize = async (req, res) => {
    try {
        await sizeService.updateSize(req.params.id, req.body);
        successResponse(res, 'Size updated successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const deleteSize = async (req, res) => {
    try {
        await sizeService.deleteSize(req.params.id);
        successResponse(res, 'Size deleted successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

module.exports = {
    getAllSizes,
    getSizeById,
    getSizeByIdForUpdate,
    createSize,
    updateSize,
    deleteSize,
};
