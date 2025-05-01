const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

const upload = require("../middleware/multer.middleware")



router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.get('/update/:id', itemController.getItemByIdForUpdate);
router.post('/',upload.array('img', 10),itemController.createItem);
router.put('/:id',upload.array('img', 10), itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
