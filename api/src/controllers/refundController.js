const RefundService = require("../services/refundService");
const { successResponse, errorResponse } = require("../utils/response");

exports.getAll = async (req, res) => {
    try {
        const refunds = await RefundService.getAll(req.query);
        return successResponse(res, "Refunds fetched successfully", refunds);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const refund = await RefundService.getById(req.params.id);
        if (!refund) return errorResponse(res, "Refund not found", 404);
        return successResponse(res, "Refund fetched successfully", refund);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getByIdForUpdate = async (req, res) => {
    try {
        const refund = await RefundService.getByIdForUpdate(req.params.id);
        if (!refund) return errorResponse(res, "Refund not found", 404);
        return successResponse(res, "Refund fetched successfully for update", refund);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const id = await RefundService.create(req.body);
        return successResponse(res, "Refund created successfully", { id });
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await RefundService.update(req.params.id, req.body);
        if (!updated) return errorResponse(res, "Refund not found or not updated", 404);
        return successResponse(res, "Refund updated successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await RefundService.delete(req.params.id);
        if (!deleted) return errorResponse(res, "Refund not found or not deleted", 404);
        return successResponse(res, "Refund deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
