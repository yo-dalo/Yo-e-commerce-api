const  ItemImage = require('../models/ItemImage');

exports.delete_ = async(id)=>{
  
     await ItemImage.deleteById(id);
    
}