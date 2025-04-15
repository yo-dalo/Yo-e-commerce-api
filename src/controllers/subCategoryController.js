const subCategoryService = require('../services/subCategoryService');
const { successResponse, errorResponse } = require('../utils/response');

const getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await subCategoryService.getAllSubCategories(req.query);
        successResponse(res, 'Subcategories fetched successfully', subCategories);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getSubCategoryById = async (req, res) => {
    try {
        const subCategory = await subCategoryService.getSubCategoryById(req.params.id);
        if (!subCategory) return errorResponse(res, 'Subcategory not found', 404);
        successResponse(res, 'Subcategory fetched successfully', subCategory);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getSubCategoryByIdForUpdate = async (req, res) => {
    try {
        const subCategory = await subCategoryService.getSubCategoryByIdForUpdate(req.params.id);
        if (!subCategory) return errorResponse(res, 'Subcategory not found', 404);
        successResponse(res, 'Subcategory fetched for update', subCategory);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const createSubCategory = async (req, res) => {
    try {
        const id = await subCategoryService.createSubCategory(req.file.filename,req.body);
        successResponse(res, 'Subcategory created successfully', { id });
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const updateSubCategory = async (req, res) => {
    try {
        await subCategoryService.updateSubCategory(req.params.id,req.file.filename, req.body);
        successResponse(res, 'Subcategory updated successfully');
    } catch (err) {
        errorResponse(res, err.message);
        
        console.log(err);
    }
};

const deleteSubCategory = async (req, res) => {
    try {
        await subCategoryService.deleteSubCategory(req.params.id);
        successResponse(res, 'Subcategory deleted successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

module.exports = {
    getAllSubCategories,
    getSubCategoryById,
    getSubCategoryByIdForUpdate,
    createSubCategory,
    updateSubCategory,
    deleteSubCategory
};
