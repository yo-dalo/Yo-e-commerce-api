const Return = require("../models/Return");

class ReturnService {
    static async getAll(options) {
        return await Return.getAll(options);
    }

    static async getById(id) {
        return await Return.getById(id);
    }

    static async getByIdForUpdate(id) {
        return await Return.getByIdForUpdate(id);
    }

    static async create(data) {
        return await Return.create(data);
    }

    static async update(id, data) {
        return await Return.update(id, data);
    }

    static async delete(id) {
        return await Return.delete(id);
    }
}

module.exports = ReturnService;
