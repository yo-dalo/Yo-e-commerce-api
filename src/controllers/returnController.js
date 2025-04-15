const ReturnService = require("../services/returnService");
const { successResponse, errorResponse } = require("../utils/response");

exports.getAll = async (req, res) => {
    try {
        const returns = await ReturnService.getAll(req.query);
        return successResponse(res, "Returns fetched successfully", returns);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const returnItem = await ReturnService.getById(req.params.id);
        if (!returnItem) return errorResponse(res, "Return not found", 404);
        return successResponse(res, "Return fetched successfully", returnItem);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getByIdForUpdate = async (req, res) => {
    try {
        const returnItem = await ReturnService.getByIdForUpdate(req.params.id);
        if (!returnItem) return errorResponse(res, "Return not found", 404);
        return successResponse(res, "Return fetched successfully for update", returnItem);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const id = await ReturnService.create(req.body);
        return successResponse(res, "Return request created successfully", { id });
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await ReturnService.update(req.params.id, req.body);
        if (!updated) return errorResponse(res, "Return not found or not updated", 404);
        return successResponse(res, "Return request updated successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await ReturnService.delete(req.params.id);
        if (!deleted) return errorResponse(res, "Return not found or not deleted", 404);
        return successResponse(res, "Return request deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
