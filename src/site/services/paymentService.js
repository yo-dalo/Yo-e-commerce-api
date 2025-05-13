const Payment = require("../models/Payment");

class PaymentService {
    static async getAll(options) {
        return await Payment.getAll(options);
    }

    static async getById(id) {
        return await Payment.getById(id);
    }

    static async getByIdForUpdate(id) {
        return await Payment.getByIdForUpdate(id);
    }

    static async create(data) {
        return await Payment.create(data);
    }

    static async update(id, data) {
        return await Payment.update(id, data);
    }

    static async delete(id) {
        return await Payment.delete(id);
    }
}

module.exports = PaymentService;
