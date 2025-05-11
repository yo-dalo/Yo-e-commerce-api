const Item = require('../models/Item');
const ItemImage = require('../models/ItemImage');
const ItemVariant = require('../models/ItemVariant');


const getAllItems = async (query) => {
    return await Item.getAll(query);
};

const getItemById = async (id) => {
    const item = await Item.getById(id);
    if (item) {
        item.images = await ItemImage.getByItemId(id);
        item.variants = await ItemVariant.getByItemId(id);
    }
    return item;
};

const getItemByIdForUpdate = async (id) => {
    return await Item.getByIdForUpdate(id);
};

const createItem = async (data, images) => {
  
  const itemVariantData = JSON.parse(data.itemVariantData);
    const itemId = await Item.create(data);
    console.log(itemId ,"item create");
  //  const itemId = 10;
    if (images?.length) {
        for (let img of images) {
         // console.log(itemId,img);
            await ItemImage.create({ item_id: itemId, img:img.filename });
        }
    }
    
    if(itemVariantData?.length){
      for (let itemVariant of itemVariantData) {
        await ItemVariant.create({...itemVariant,...{item_id:itemId}});
        }
    }
    
    
    return itemId;
    
};

const updateItem = async (id, data) => {
    await Item.update(id, data);
};

const deleteItem = async (id) => {
    await Item.delete(id);
    await ItemImage.deleteByItemId(id);
};






/// for main website 

const getByIdX = async (id) => {
    const item = await Item.getByIdX(id);

    return item;
};






module.exports = {
    getAllItems,
    getItemById,
    getItemByIdForUpdate,
    createItem,
    updateItem,
    deleteItem,
    
    
    
    
    
  ///  from main web site 
    getByIdX,
};
