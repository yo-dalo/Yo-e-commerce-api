const posterService = require('../services/posterService');
const { successResponse, errorResponse } = require('../utils/response'); // Assuming you have response helpers

const posterController = {
  create: async (req, res) => {
    try {
      const poster = await posterService.createPoster(req.file.filename,req.body);
      successResponse(res,  'Poster created successfully',poster);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  getAll: async (req, res) => {
    try {
      const posters = await posterService.getAllPosters();
      successResponse(res, 'Posters fetched successfully',posters);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const poster = await posterService.getPosterById(req.params.id);
      if (!poster) {
        return errorResponse(res, 'Poster not found', 404);
      }
      successResponse(res, 'Poster fetched successfully',poster);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  getByIdForUpdate: async (req, res) => {
    try {
      const poster = await posterService.getPosterByIdForUpdate(req.params.id);
      if (!poster) {
        return errorResponse(res, 'Poster not found', 404);
      }
      successResponse(res,  'Poster fetched for update',poster);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  update: async (req, res) => {
    
    try {
      await posterService.updatePoster(req.params.id,req.file?.filename, req.body);
      successResponse(res,  'Poster updated successfully',null,);
    } catch (error) {
      errorResponse(res, error);
    }
  },

  delete: async (req, res) => {
    try {
      await posterService.deletePoster(req.params.id);
      successResponse(res,  'Poster deleted successfully',null,);
    } catch (error) {
      errorResponse(res, error);
    }
  },
  
  
  
  
  
  
  
/////site rout 


getAllX: async (req, res) => {
    try {
      const posters = await posterService.getAllX();
      successResponse(res, 'Posters fetched successfully',posters);
    } catch (error) {
      errorResponse(res, error);
    }
  }




  
  
};

















module.exports = posterController;
