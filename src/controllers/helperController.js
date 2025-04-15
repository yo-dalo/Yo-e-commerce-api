const { successResponse, errorResponse } = require('../utils/response');

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