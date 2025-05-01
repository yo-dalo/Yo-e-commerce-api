const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.get('/update/:id', userController.getUserByIdForUpdate);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


////frantend router 

router.post('/login', userController.loginUser);

module.exports = router;
