const WishlistService = require("../services/wishlistService");
const { successResponse, errorResponse } = require("../utils/response");

exports.getAll = async (req, res) => {
    try {
        const wishlists = await WishlistService.getAll(req.query);
        return successResponse(res, "Wishlist fetched successfully", wishlists);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const wishlist = await WishlistService.getById(req.params.id);
        if (!wishlist) return errorResponse(res, "Wishlist not found", 404);
        return successResponse(res, "Wishlist fetched successfully", wishlist);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getByIdForUpdate = async (req, res) => {
    try {
        const wishlist = await WishlistService.getByIdForUpdate(req.params.id);
        if (!wishlist) return errorResponse(res, "Wishlist not found", 404);
        return successResponse(res, "Wishlist fetched successfully for update", wishlist);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const id = await WishlistService.create(req.body);
        return successResponse(res, "Wishlist created successfully", { id });
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await WishlistService.update(req.params.id, req.body);
        if (!updated) return errorResponse(res, "Wishlist not found or not updated", 404);
        return successResponse(res, "Wishlist updated successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await WishlistService.delete(req.params.id);
        if (!deleted) return errorResponse(res, "Wishlist not found or not deleted", 404);
        return successResponse(res, "Wishlist deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
