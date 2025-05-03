const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer.middleware');
const adminController = require('../controllers/adminController');



// Routes
router.post('/',upload.single('img'), adminController.create);
router.get('/', adminController.getAll);
router.get('/:id', adminController.getById);
router.put('/:id',upload.single('img'), adminController.update);
router.delete('/:id', adminController.delete);

module.exports = router;
