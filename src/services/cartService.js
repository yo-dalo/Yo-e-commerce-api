const Cart = require("../models/Cart");

class CartService {
    static async getAll(options) {
        return await Cart.getAll(options);
    }

    static async getById(id) {
        return await Cart.getById(id);
    }

    static async getByIdForUpdate(id) {
        return await Cart.getByIdForUpdate(id);
    }

    static async create(data) {
        return await Cart.create(data);
    }

    static async update(id, data) {
        return await Cart.update(id, data);
    }

    static async delete(id) {
        return await Cart.delete(id);
    }
}

module.exports = CartService;
