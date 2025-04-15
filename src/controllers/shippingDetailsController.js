const ShippingDetailsService = require("../services/shippingDetailsService");
const { successResponse, errorResponse } = require("../utils/response");

exports.getAll = async (req, res) => {
    try {
        const shippingDetails = await ShippingDetailsService.getAll(req.query);
        return successResponse(res, "Shipping details fetched successfully", shippingDetails);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const shippingDetail = await ShippingDetailsService.getById(req.params.id);
        if (!shippingDetail) return errorResponse(res, "Shipping detail not found", 404);
        return successResponse(res, "Shipping detail fetched successfully", shippingDetail);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getByIdForUpdate = async (req, res) => {
    try {
        const shippingDetail = await ShippingDetailsService.getByIdForUpdate(req.params.id);
        if (!shippingDetail) return errorResponse(res, "Shipping detail not found", 404);
        return successResponse(res, "Shipping detail fetched successfully for update", shippingDetail);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const id = await ShippingDetailsService.create(req.body);
        return successResponse(res, "Shipping detail created successfully", { id });
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await ShippingDetailsService.update(req.params.id, req.body);
        if (!updated) return errorResponse(res, "Shipping detail not found or not updated", 404);
        return successResponse(res, "Shipping detail updated successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await ShippingDetailsService.delete(req.params.id);
        if (!deleted) return errorResponse(res, "Shipping detail not found or not deleted", 404);
        return successResponse(res, "Shipping detail deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
