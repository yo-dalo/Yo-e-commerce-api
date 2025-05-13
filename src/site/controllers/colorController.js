const colorService = require('../services/colorService');
const { successResponse, errorResponse } = require('../utils/response');

const getAllColors = async (req, res) => {
    try {
        const colors = await colorService.getAllColors(req.query);
        successResponse(res, 'Colors fetched successfully', colors);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getColorById = async (req, res) => {
    try {
        const color = await colorService.getColorById(req.params.id);
        if (!color) return errorResponse(res, 'Color not found', 404);
        successResponse(res, 'Color fetched successfully', color);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getColorByIdForUpdate = async (req, res) => {
    try {
        const color = await colorService.getColorByIdForUpdate(req.params.id);
        if (!color) return errorResponse(res, 'Color not found', 404);
        successResponse(res, 'Color fetched successfully for update', color);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const createColor = async (req, res) => {
    try {
        const id = await colorService.createColor(req.body);
        successResponse(res, 'Color created successfully', { id });
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const updateColor = async (req, res) => {
    try {
        await colorService.updateColor(req.params.id, req.body);
        successResponse(res, 'Color updated successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const deleteColor = async (req, res) => {
    try {
        await colorService.deleteColor(req.params.id);
        successResponse(res, 'Color deleted successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

/////main site rout 
const getByItemVariantIdX = async (req, res) => {
    try {
        const color = await colorService.getByItemVariantIdX(req.params.id);
        if (!color) return errorResponse(res, 'Color not found', 404);
        successResponse(res, 'Color fetched successfully', color);
    } catch (err) {
        errorResponse(res, err.message);
    }
};



module.exports = {
    getAllColors,
    getColorById,
    getColorByIdForUpdate,
    createColor,
    updateColor,
    deleteColor,
    
    
    
    
    getByItemVariantIdX, ///extera 
};
