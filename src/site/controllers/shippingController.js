const ShippingDetail = require('../models/ShippingDetail');
const { successResponse, errorResponse } = require('../utils/response');

// Create Shipping Detail
exports.createShippingDetail = async (req, res, next) => {
    try {
        const { order_id, address, pincode, city, state, tracking_no, status } = req.body;

        const shippingId = await ShippingDetail.create({
            order_id, address, pincode, city, state, tracking_no, status
        });

        return successResponse(res, { shippingId }, 'Shipping detail created successfully');
    } catch (error) {
        next(error);
    }
};

// Get All Shipping Details
exports.getShippingDetails = async (req, res, next) => {
    try {
        const shippingDetails = await ShippingDetail.findAll();

        return successResponse(res, shippingDetails);
    } catch (error) {
        next(error);
    }
};

// Get Shipping Detail by ID
exports.getShippingDetailById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const shippingDetail = await ShippingDetail.findById(id);

        if (!shippingDetail) return errorResponse(res, 'Shipping detail not found', 404);

        return successResponse(res, shippingDetail);
    } catch (error) {
        next(error);
    }
};

// Get Shipping Detail by Order ID
exports.getShippingDetailByOrderId = async (req, res, next) => {
    try {
        const { order_id } = req.params;
        const shippingDetail = await ShippingDetail.findByOrderId(order_id);

        if (!shippingDetail) return errorResponse(res, 'Shipping detail not found for this order', 404);

        return successResponse(res, shippingDetail);
    } catch (error) {
        next(error);
    }
};

// Update Shipping Detail
exports.updateShippingDetail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { address, pincode, city, state, tracking_no, status } = req.body;

        const updated = await ShippingDetail.update(id, { address, pincode, city, state, tracking_no, status });

        if (!updated) return errorResponse(res, 'Failed to update shipping detail', 400);

        return successResponse(res, {}, 'Shipping detail updated successfully');
    } catch (error) {
        next(error);
    }
};

// Delete Shipping Detail
exports.deleteShippingDetail = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deleted = await ShippingDetail.delete(id);

        if (!deleted) return errorResponse(res, 'Failed to delete shipping detail', 400);

        return successResponse(res, {}, 'Shipping detail deleted successfully');
    } catch (error) {
        next(error);
    }
};
