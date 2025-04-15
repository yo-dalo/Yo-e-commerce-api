const express = require('express');
const router = express.Router();
const {statusOption} = require('../controllers/helperController')

router.get("/statusOption",statusOption);




module.exports = router;