const CouponUsageService = require("../services/couponUsageService");
const { successResponse, errorResponse } = require("../utils/response");

exports.getAll = async (req, res) => {
    try {
        const couponUsage = await CouponUsageService.getAll(req.query);
        return successResponse(res, "Coupon usage records fetched successfully", couponUsage);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const couponUsage = await CouponUsageService.getById(req.params.id);
        if (!couponUsage) return errorResponse(res, "Coupon usage record not found", 404);
        return successResponse(res, "Coupon usage record fetched successfully", couponUsage);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getByIdForUpdate = async (req, res) => {
    try {
        const couponUsage = await CouponUsageService.getByIdForUpdate(req.params.id);
        if (!couponUsage) return errorResponse(res, "Coupon usage record not found", 404);
        return successResponse(res, "Coupon usage record fetched successfully for update", couponUsage);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const id = await CouponUsageService.create(req.body);
        return successResponse(res, "Coupon usage record created successfully", { id });
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await CouponUsageService.update(req.params.id, req.body);
        if (!updated) return errorResponse(res, "Coupon usage record not found or not updated", 404);
        return successResponse(res, "Coupon usage record updated successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await CouponUsageService.delete(req.params.id);
        if (!deleted) return errorResponse(res, "Coupon usage record not found or not deleted", 404);
        return successResponse(res, "Coupon usage record deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
