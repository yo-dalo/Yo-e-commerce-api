const express = require('express');
const router = express.Router();
const itemController = require('../../controllers/itemController');
const colorController = require('../../controllers/colorController');

const upload = require("../../middleware/multer.middleware")



router.get('/v/:id', colorController.getByItemVariantIdX);
router.get('/:id', itemController.getByIdX);

module.exports = router;
