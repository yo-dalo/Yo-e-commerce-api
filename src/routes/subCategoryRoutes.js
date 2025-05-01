const express = require('express');
const router = express.Router();
const subCategoryController = require('../controllers/subCategoryController');
const upload = require("../middleware/multer.middleware")


router.get('/', subCategoryController.getAllSubCategories);
router.get('/:id', subCategoryController.getSubCategoryById);
router.get('/update/:id', subCategoryController.getSubCategoryByIdForUpdate);
router.post('/', upload.single("img"),subCategoryController.createSubCategory);
router.put('/:id',upload.single("img"), subCategoryController.updateSubCategory);
router.delete('/:id', subCategoryController.deleteSubCategory);

router.get('/by-category/:id', subCategoryController.getAllByCatcategoryId);












module.exports = router;
