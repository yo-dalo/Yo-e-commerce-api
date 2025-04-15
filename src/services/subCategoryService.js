const SubCategory = require('../models/SubCategory');

const getAllSubCategories = async (query) => {
    return await SubCategory.getAll(query);
};

const getSubCategoryById = async (id) => {
    return await SubCategory.getById(id);
};

const getSubCategoryByIdForUpdate = async (id) => {
    return await SubCategory.getByIdForUpdate(id);
};

const createSubCategory = async (img,data) => {
    return await SubCategory.create(img,data);
};

const updateSubCategory = async (id,img, data) => {
    await SubCategory.update(id,img, data);
};

const deleteSubCategory = async (id) => {
    await SubCategory.delete(id);
};

module.exports = {
    getAllSubCategories,
    getSubCategoryById,
    getSubCategoryByIdForUpdate,
    createSubCategory,
    updateSubCategory,
    deleteSubCategory
};
