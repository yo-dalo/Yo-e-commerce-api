const express = require('express');
const router = express.Router();
const posterController = require('../controllers/posterController');
const upload = require('../middleware/multer.middleware');

// Routes
router.post('/',upload.single('img'), posterController.create);
router.get('/', posterController.getAll);
router.get('/:id', posterController.getById);
router.get('/update/:id', posterController.getByIdForUpdate);
router.put('/:id',upload.single('img'), posterController.update);
router.delete('/:id', posterController.delete);

module.exports = router;
