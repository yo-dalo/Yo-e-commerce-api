const orderItemService = require('../services/orderItemService');
const { successResponse, errorResponse } = require('../utils/response');

const orderItemController = {
  create: async (req, res) => {
    try {
      const result = await orderItemService.create(req.body);
      successResponse(res, 'Order item created successfully',result);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await orderItemService.getAll();
      successResponse(res,  'Order items fetched successfully',data);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const data = await orderItemService.getById(req.params.id);
      if (!data) return errorResponse(res, 'Order item not found', 404);
      successResponse(res, 'Order item fetched successfully',data);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  update: async (req, res) => {
    try {
      await orderItemService.update(req.params.id, req.body);
      successResponse(res,  'Order item updated successfully',null);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  delete: async (req, res) => {
    try {
      await orderItemService.delete(req.params.id);
      successResponse(res, 'Order item deleted successfully',null);
    } catch (error) {
      errorResponse(res, error);
    }
  }
};

module.exports = orderItemController;
