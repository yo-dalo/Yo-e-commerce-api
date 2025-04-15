const ItemVariant = require('../models/ItemVariant');

const getAllItemVariants = async (query) => {
    return await ItemVariant.getAll(query);
};

const getItemVariantById = async (id) => {
    return await ItemVariant.getById(id);
};

const getItemVariantByIdForUpdate = async (id) => {
    return await ItemVariant.getByIdForUpdate(id);
};

const createItemVariant = async (data) => {
    return await ItemVariant.create(data);
};

const updateItemVariant = async (id, data) => {
    await ItemVariant.update(id, data);
};

const deleteItemVariant = async (id) => {
    await ItemVariant.delete(id);
};

module.exports = {
    getAllItemVariants,
    getItemVariantById,
    getItemVariantByIdForUpdate,
    createItemVariant,
    updateItemVariant,
    deleteItemVariant
};
