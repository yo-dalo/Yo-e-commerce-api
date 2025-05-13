const CouponService = require("../services/couponService");
const { successResponse, errorResponse } = require("../utils/response");

exports.getAll = async (req, res) => {
    try {
        const coupons = await CouponService.getAll(req.query);
        return successResponse(res, "Coupons fetched successfully", coupons);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const coupon = await CouponService.getById(req.params.id);
        if (!coupon) return errorResponse(res, "Coupon not found", 404);
        return successResponse(res, "Coupon fetched successfully", coupon);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getByIdForUpdate = async (req, res) => {
    try {
        const coupon = await CouponService.getByIdForUpdate(req.params.id);
        if (!coupon) return errorResponse(res, "Coupon not found", 404);
        return successResponse(res, "Coupon fetched successfully for update", coupon);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const id = await CouponService.create(req.body);
        return successResponse(res, "Coupon created successfully", { id });
    } catch (error) {
        return errorResponse(res, error);
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await CouponService.update(req.params.id, req.body);
        if (!updated) return errorResponse(res, "Coupon not found or not updated", 404);
        return successResponse(res, "Coupon updated successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await CouponService.delete(req.params.id);
        if (!deleted) return errorResponse(res, "Coupon not found or not deleted", 404);
        return successResponse(res, "Coupon deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
