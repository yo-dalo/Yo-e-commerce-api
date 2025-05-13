const express = require('express');
const router = express.Router();
const itemVariantController = require('../controllers/itemVariantController');

router.get('/', itemVariantController.getAllItemVariants);
router.get('/:id', itemVariantController.getItemVariantById);
router.get('/update/:id', itemVariantController.getItemVariantByIdForUpdate);
router.post('/', itemVariantController.createItemVariant);
router.put('/:id', itemVariantController.updateItemVariant);
router.delete('/:id', itemVariantController.deleteItemVariant);

module.exports = router;
