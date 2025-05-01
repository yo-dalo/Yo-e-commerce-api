const { successResponse, errorResponse } = require('../utils/response');
const helperService = require("../services/helperService");
exports.statusOption = async (req, res, next) => {
    try {
      
   
      
      
        successResponse(res,"ok",
        [{
      "status": "Active",
      "value": "ACTIVE",
    },
    {
      
      "status": "Inactive",
      "value": "INACTIVE",
      
    }])
        
    } catch (error) {
        next(error);
    }
};



exports.allCount = async (req, res) => {
    try {
        const count = await helperService.allCount();
        return successResponse(res, "Cart items fetched successfully", count);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};