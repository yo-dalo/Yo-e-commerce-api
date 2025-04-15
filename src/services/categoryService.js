const Category = require('../models/Category');

const getAllCategories = async (query) => {
    return await Category.getAll(query);
};

const getCategoryById = async (id) => {
    return await Category.getById(id);
};

const getCategoryByIdForUpdate = async (id) => {
    return await Category.getByIdForUpdate(id);
};

const createCategory = async (img,data) => {
    return await Category.create(img,data);
};

const updateCategory = async (id,img, data) => {
    await Category.update(id, img,data);
};

const deleteCategory = async (id) => {
    await Category.delete(id);
};

module.exports = {
    getAllCategories,
    getCategoryById,
    getCategoryByIdForUpdate,
    createCategory,
    updateCategory,
    deleteCategory
};
