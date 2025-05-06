const express = require('express');
const router = express.Router();
const itemImageController = require('../controllers/itemImageController');


router.delete('/:id', itemImageController.delete);

module.exports = router;
