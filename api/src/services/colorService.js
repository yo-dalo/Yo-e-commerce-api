const Color = require('../models/Color');

const getAllColors = async (query) => {
    return await Color.getAll(query);
};

const getColorById = async (id) => {
    return await Color.getById(id);
};

const getColorByIdForUpdate = async (id) => {
    return await Color.getByIdForUpdate(id);
};

const createColor = async (data) => {
    return await Color.create(data);
};

const updateColor = async (id, data) => {
    return await Color.update(id, data);
};

const deleteColor = async (id) => {
    return await Color.delete(id);
};

module.exports = {
    getAllColors,
    getColorById,
    getColorByIdForUpdate,
    createColor,
    updateColor,
    deleteColor,
};
