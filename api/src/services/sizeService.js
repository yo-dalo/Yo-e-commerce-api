const Size = require('../models/Size');

const getAllSizes = async (query) => {
    return await Size.getAll(query);
};

const getSizeById = async (id) => {
    return await Size.getById(id);
};

const getSizeByIdForUpdate = async (id) => {
    return await Size.getByIdForUpdate(id);
};

const createSize = async (data) => {
    return await Size.create(data);
};

const updateSize = async (id, data) => {
    return await Size.update(id, data);
};

const deleteSize = async (id) => {
    return await Size.delete(id);
};

module.exports = {
    getAllSizes,
    getSizeById,
    getSizeByIdForUpdate,
    createSize,
    updateSize,
    deleteSize,
};
