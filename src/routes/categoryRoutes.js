const express = require('express');
const upload = require('../middleware/multer.middleware');
const categoryController = require('../controllers/categoryController');
const authorizePermission = require('../middleware/authorizePermission');
const {adminAuth} = require('../middleware/authMiddleware.js');

const router = express.Router();





router.get('/', adminAuth,authorizePermission("read_category"),categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.get('/update/:id', categoryController.getCategoryByIdForUpdate);
router.post('/', upload.single('img'),categoryController.createCategory);
router.put('/:id',upload.single('img'), categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
