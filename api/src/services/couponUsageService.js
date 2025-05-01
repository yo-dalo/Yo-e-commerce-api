const CouponUsage = require("../models/CouponUsage");

class CouponUsageService {
    static async getAll(options) {
        return await CouponUsage.getAll(options);
    }

    static async getById(id) {
        return await CouponUsage.getById(id);
    }

    static async getByIdForUpdate(id) {
        return await CouponUsage.getByIdForUpdate(id);
    }

    static async create(data) {
        return await CouponUsage.create(data);
    }

    static async update(id, data) {
        return await CouponUsage.update(id, data);
    }

    static async delete(id) {
        return await CouponUsage.delete(id);
    }
}

module.exports = CouponUsageService;
