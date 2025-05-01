const express = require('express');
const router = express.Router();
const {statusOption,allCount} = require('../controllers/helperController')

router.get("/statusOption",statusOption);
router.get("/count",allCount);




module.exports = router;