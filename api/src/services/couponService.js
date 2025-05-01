const Coupon = require("../models/Coupon");

class CouponService {
    static async getAll(options) {
        return await Coupon.getAll(options);
    }

    static async getById(id) {
        return await Coupon.getById(id);
    }

    static async getByIdForUpdate(id) {
        return await Coupon.getByIdForUpdate(id);
    }

    static async create(data) {
        return await Coupon.create(data);
    }

    static async update(id, data) {
        return await Coupon.update(id, data);
    }

    static async delete(id) {
        return await Coupon.delete(id);
    }
}

module.exports = CouponService;
