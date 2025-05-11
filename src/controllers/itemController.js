const itemService = require('../services/itemService');
const { successResponse, errorResponse } = require('../utils/response');

const getAllItems = async (req, res) => {
    try {
        const items = await itemService.getAllItems(req.query);
        successResponse(res, 'Items fetched successfully _', items);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getItemById = async (req, res) => {
  
    try {
        const item = await itemService.getItemById(req.params.id);
        if (!item) return errorResponse(res, 'Item not found', 404);
        successResponse(res, 'Item fetched successfully for admin', item);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const getItemByIdForUpdate = async (req, res) => {
    try {
        const item = await itemService.getItemByIdForUpdate(req.params.id);
        if (!item) return errorResponse(res, 'Item not found', 404);
        successResponse(res, 'Item fetched for update', item);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const createItem = async (req, res) => {
 // console.log(req.body);
  
        
    try {
        const id = await itemService.createItem(req.body, req?.files);
        successResponse(res, 'Item created successfully', { id });
    } catch (err) {
        errorResponse(res, err.message);
    }
    
};

const updateItem = async (req, res) => {
    try {
        await itemService.updateItem(req.params.id, req.body);
        successResponse(res, 'Item updated successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const deleteItem = async (req, res) => {
    try {
        await itemService.deleteItem(req.params.id);
        successResponse(res, 'Item deleted successfully');
    } catch (err) {
        errorResponse(res, err.message);
    }
};


//// for main web site 


const getByIdX = async (req, res) => {
  
    try {
        const item = await itemService.getByIdX(req.params.id);
        if (!item) return errorResponse(res, 'Item not found', 404);
        successResponse(res, 'Item fetched successfully 1', item);
    } catch (err) {
        errorResponse(res, err.message);
    }
};





module.exports = {
    getAllItems,
    getItemById,
    getItemByIdForUpdate,
    createItem,
    updateItem,
    deleteItem,
    
    
    /// for main website 
    getByIdX,
};
