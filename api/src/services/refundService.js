const Refund = require("../models/Refund");

class RefundService {
    static async getAll(options) {
        return await Refund.getAll(options);
    }

    static async getById(id) {
        return await Refund.getById(id);
    }

    static async getByIdForUpdate(id) {
        return await Refund.getByIdForUpdate(id);
    }

    static async create(data) {
        return await Refund.create(data);
    }

    static async update(id, data) {
        return await Refund.update(id, data);
    }

    static async delete(id) {
        return await Refund.delete(id);
    }
}

module.exports = RefundService;
