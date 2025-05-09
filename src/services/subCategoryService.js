const SubCategory = require('../models/SubCategory');
const deleteImage = require('../utils/deleteImage')

const getAllSubCategories = async (query) => {
    return await SubCategory.getAll(query);
};

const getSubCategoryById = async (id) => {
    return await SubCategory.getById(id);
};

const getSubCategoryByIdForUpdate = async (id) => {
    return await SubCategory.getByIdForUpdate(id);
};

const createSubCategory = async (img,data) => {
    return await SubCategory.create(img,data);
};

const updateSubCategory = async (id,img, data) => {
    //await SubCategory.update(id,img, data);
        // img? await SubCategory.update(id, img,data): await SubCategory.updateWithoutImg(id,data);
 if(img){
     const dImg = await SubCategory.getImgById(id)
     await SubCategory.update(id,img,data) 
     if(dImg) {deleteImage(dImg)};
   }else{
     await SubCategory.updateWithoutImg(id,data);
   }
};

const deleteSubCategory = async (id) => {
    
    const dImg = await SubCategory.getImgById(id)
                 await SubCategory.delete(id);
                 if(dImg) {deleteImage(dImg)};
};

///////extra services

const getAllSubCategoriesBygetCategoriesId = async (id,query) => {
    return await SubCategory.getAllByCatcategoryId(id,query);
};















const getAllX = async (query) => {
    return await SubCategory.getAllX(query);
};





module.exports = {
    getAllSubCategories,
    getSubCategoryById,
    getSubCategoryByIdForUpdate,
    createSubCategory,
    updateSubCategory,
    deleteSubCategory,
    ///////////////////
    getAllSubCategoriesBygetCategoriesId,
    
    /////for main web site 
    
    
    getAllX,
    
};
