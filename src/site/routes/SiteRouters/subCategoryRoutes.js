const express = require('express');
const router = express.Router();
const subCategoryController = require('../../controllers/subCategoryController');
const upload = require("../../middleware/multer.middleware")


router.get('/', subCategoryController.getAllX);
router.get('/:id', subCategoryController.getByCatX);


module.exports = router;
