const express = require('express');
const router = express.Router();
const posterController = require('../../controllers/posterController');


router.get('/', posterController.getAllX);




module.exports = router;
