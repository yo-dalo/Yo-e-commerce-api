const express = require('express');
const router = express.Router();
const  {userAuth} = require("../middleware/authMiddleware")


const {statusOption,allCount} = require('../controllers/helperController')
const {islogin} = require('../controllers/helperController')





router.get("/islogin",userAuth,islogin);
router.get("/statusOption",statusOption);
router.get("/count",allCount);




module.exports = router;