const itemVariantService = require('../services/itemVariantService');
const { successResponse, errorResponse } = require('../utils/response');

const getAllItemVariants = async (req, res) => {
    try {
        const itemVariants = await itemVariantService.getAllItemVariants(req.query);
        successResponse(res, 'Item variants fetched successfully', itemVariants);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getItemVariantById = async (req, res) => {
    try {
        const itemVariant = await itemVariantService.getItemVariantById(req.params.id);
        if (!itemVariant) return errorResponse(res, 'Item variant not found', 404);
        successResponse(res, 'Item variant fetched successfully', itemVariant);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getItemVariantByIdForUpdate = async (req, res) => {
    try {
        const itemVariant = await itemVariantService.getItemVariantByIdForUpdate(req.params.id);
        if (!itemVariant) return errorResponse(res, 'Item variant not found', 404);
        successResponse(res, 'Item variant fetched for update', itemVariant);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const createItemVariant = async (req, res) => {
    try {
        const id = await itemVariantService.createItemVariant(req.body);
        successResponse(res, 'Item variant created successfully', { id });
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const updateItemVariant = async (req, res) => {
    try {
        await itemVariantService.updateItemVariant(req.params.id, req.body);
        successResponse(res, 'Item variant updated successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const deleteItemVariant = async (req, res) => {
    try {
        await itemVariantService.deleteItemVariant(req.params.id);
        successResponse(res, 'Item variant deleted successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

module.exports = {
    getAllItemVariants,
    getItemVariantById,
    getItemVariantByIdForUpdate,
    createItemVariant,
    updateItemVariant,
    deleteItemVariant
};
