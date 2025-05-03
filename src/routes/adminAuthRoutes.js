const express = require('express');
const upload = require('../middleware/multer.middleware');
const router = express.Router();
const adminAuthController = require('../controllers/adminAuthController');
const {adminAuth} = require('../middleware/authMiddleware');


////frantend router 

router.post('/login', adminAuthController.loginAdmin);
router.post('/register',upload.single('img'), adminAuthController.registerAdmin);
router.get('/is-login',adminAuth, adminAuthController.adminIsLogin);

module.exports = router;
