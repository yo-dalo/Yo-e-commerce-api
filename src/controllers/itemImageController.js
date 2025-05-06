const itemImageService = require('../services/itemImageService');
const { successResponse, errorResponse } = require('../utils/response'); // Assuming you have response helpers

 class ItemController{
   static async delete(req, res) {
            try {
         await itemImageService.delete_(req.params.id);
      successResponse(res, "Cart item deleted successfully");
    } catch (error) {
         errorResponse(res, error.message);
    }
    }
   

  
}


module.exports = ItemController;