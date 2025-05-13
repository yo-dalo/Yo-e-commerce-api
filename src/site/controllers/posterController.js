const posterService = require('../services/posterService');
const { successResponse, errorResponse } = require('../../utils/response');

class PosterController {
  async getAllPosters(req, res) {
    try {
      const posters = await posterService.getAllPosters();
      successResponse(res, posters, 'Posters retrieved successfully');
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }

  async getPosterById(req, res) {
    try {
      const poster = await posterService.getPosterById(req.params.id);
      if (!poster) {
        return errorResponse(res, 'Poster not found', 404);
      }
      successResponse(res, poster, 'Poster retrieved successfully');
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }

  async getPosterByUrl(req, res) {
    try {
      const poster = await posterService.getPosterByUrl(req.params.url);
      if (!poster) {
        return errorResponse(res, 'Poster not found', 404);
      }
      successResponse(res, poster, 'Poster retrieved successfully');
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }
}

module.exports = new PosterController();