const Wishlist = require("../models/Wishlist");

class WishlistService {
    static async getAll(options) {
        return await Wishlist.getAll(options);
    }

    static async getById(id) {
        return await Wishlist.getById(id);
    }

    static async getByIdForUpdate(id) {
        return await Wishlist.getByIdForUpdate(id);
    }

    static async create(data) {
        return await Wishlist.create(data);
    }

    static async update(id, data) {
        return await Wishlist.update(id, data);
    }

    static async delete(id) {
        return await Wishlist.delete(id);
    }
}

module.exports = WishlistService;
