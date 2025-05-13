const Order = require("../models/Order");

class OrderService {
    static async getAll(options) {
        return await Order.getAll(options);
    }

    static async getById(id) {
        return await Order.getById(id);
    }

    static async getByIdForUpdate(id) {
        return await Order.getByIdForUpdate(id);
    }

    static async create(data) {
        return await Order.create(data);
    }

    static async update(id, data) {
        return await Order.update(id, data);
    }

    static async delete(id) {
        return await Order.delete(id);
    }
}

module.exports = OrderService;
