const express = require('express');
const upload = require('../middleware/multer.middleware');
const categoryController = require('../controllers/categoryController');
const router = express.Router();





router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.get('/update/:id', categoryController.getCategoryByIdForUpdate);
router.post('/', upload.single('img'),categoryController.createCategory);
router.put('/:id',upload.single('img'), categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
