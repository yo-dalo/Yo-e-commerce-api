const express = require('express');
const router = express.Router();
const userAuthController = require('../controllers/userAuthController');
const {userAuth} = require('../middleware/authMiddleware.js');


////frantend router 

router.post('/login', userAuthController.loginUser);
router.post('/register', userAuthController.registerUser);
router.get('/is-login',userAuth, userAuthController.userIsLogin);

module.exports = router;
