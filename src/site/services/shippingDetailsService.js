const ShippingDetails = require("../models/ShippingDetail");

class ShippingDetailsService {
    static async getAll(options) {
        return await ShippingDetails.getAll(options);
    }

    static async getById(id) {
        return await ShippingDetails.getById(id);
    }

    static async getByIdForUpdate(id) {
        return await ShippingDetails.getByIdForUpdate(id);
    }

    static async create(data) {
        return await ShippingDetails.create(data);
    }

    static async update(id, data) {
        return await ShippingDetails.update(id, data);
    }

    static async delete(id) {
        return await ShippingDetails.delete(id);
    }
}

module.exports = ShippingDetailsService;
