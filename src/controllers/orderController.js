const OrderService = require("../services/orderService");
const { successResponse, errorResponse } = require("../utils/response");

exports.getAll = async (req, res) => {
    try {
        const orders = await OrderService.getAll(req.query);
        return successResponse(res, "Orders fetched successfully", orders);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const order = await OrderService.getById(req.params.id);
        if (!order) return errorResponse(res, "Order not found", 404);
        return successResponse(res, "Order fetched successfully", order);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getByIdForUpdate = async (req, res) => {
    try {
        const order = await OrderService.getByIdForUpdate(req.params.id);
        if (!order) return errorResponse(res, "Order not found", 404);
        return successResponse(res, "Order fetched successfully for update", order);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const id = await OrderService.create(req.body);
        return successResponse(res, "Order created successfully", { id });
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await OrderService.update(req.params.id, req.body);
        if (!updated) return errorResponse(res, "Order not found or not updated", 404);
        return successResponse(res, "Order updated successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await OrderService.delete(req.params.id);
        if (!deleted) return errorResponse(res, "Order not found or not deleted", 404);
        return successResponse(res, "Order deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
