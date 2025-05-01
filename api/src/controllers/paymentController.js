const PaymentService = require("../services/paymentService");
const { successResponse, errorResponse } = require("../utils/response");

exports.getAll = async (req, res) => {
    try {
        const payments = await PaymentService.getAll(req.query);
        return successResponse(res, "Payments fetched successfully", payments);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const payment = await PaymentService.getById(req.params.id);
        if (!payment) return errorResponse(res, "Payment not found", 404);
        return successResponse(res, "Payment fetched successfully", payment);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getByIdForUpdate = async (req, res) => {
    try {
        const payment = await PaymentService.getByIdForUpdate(req.params.id);
        if (!payment) return errorResponse(res, "Payment not found", 404);
        return successResponse(res, "Payment fetched successfully for update", payment);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const id = await PaymentService.create(req.body);
        return successResponse(res, "Payment created successfully", { id });
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await PaymentService.update(req.params.id, req.body);
        if (!updated) return errorResponse(res, "Payment not found or not updated", 404);
        return successResponse(res, "Payment updated successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await PaymentService.delete(req.params.id);
        if (!deleted) return errorResponse(res, "Payment not found or not deleted", 404);
        return successResponse(res, "Payment deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
