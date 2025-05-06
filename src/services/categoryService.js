const Category = require('../models/Category');
const deleteImage = require('../utils/deleteImage')
const {log} = require('../utils/logger')

const getAllCategories = async (query) => {
    return await Category.getAll(query);
};

const getCategoryById = async (id) => {
   return await Category.getById(id);
};

const getCategoryByIdForUpdate = async (id) => {
    return await Category.getByIdForUpdate(id);
};

const createCategory = async (img,data) => {
    return await Category.create(img,data);
};

const updateCategory = async (id,img, data) => {
       if(img){
     const dImg = await Category.getImgById(id)
     await Category.update(id,img,data) 
     if(dImg) {deleteImage(dImg)};
   }else{
     await Category.updateWithoutImg(id,data);
   }
};

const deleteCategory = async (id) => {
    const dImg = await Category.getImgById(id)
                 await Category.delete(id);
                 if(dImg) {deleteImage(dImg)};
     
};

module.exports = {
    getAllCategories,
    getCategoryById,
    getCategoryByIdForUpdate,
    createCategory,
    updateCategory,
    deleteCategory
};
