const categoryService = require('../services/categoryService');
const { successResponse, errorResponse } = require('../utils/response');

const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories(req.query);
        successResponse(res, 'Categories fetched successfully', categories);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getCategoryById = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(req.params.id);
        if (!category) return errorResponse(res, 'Category not found', 404);
        successResponse(res, 'Category fetched successfully', category);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getCategoryByIdForUpdate = async (req, res) => {
    try {
        const category = await categoryService.getCategoryByIdForUpdate(req.params.id);
        if (!category) return errorResponse(res, 'Category not found', 404);
        successResponse(res, 'Category fetched for update', category);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const createCategory = async (req, res) => {
  console.log(req.file);
    try {
        const id = await categoryService.createCategory(req.file?.filename,req.body);
        successResponse(res, 'Category created successfully', { id });
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const updateCategory = async (req, res) => {
    try {
        await categoryService.updateCategory(req.params.id, req.file?.filename,req.body);
        successResponse(res, 'Category updated successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const deleteCategory = async (req, res) => {
    try {
        await categoryService.deleteCategory(req.params.id);
        successResponse(res, 'Category deleted successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    getCategoryByIdForUpdate,
    createCategory,
    updateCategory,
    deleteCategory
};
