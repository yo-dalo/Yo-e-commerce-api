const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const validateRequest = require("../middleware/validator");

const {roleValidator} = require("../validators/roleValidator.js")

router.get('/', roleController.getAllRoles);
router.get('/:id', roleController.getRoleById);
router.get('/update/:id', roleController.getRoleByIdForUpdate);
router.post('/',roleController.createRole);
router.put('/:id', roleController.updateRole);
router.delete('/:id', roleController.deleteRole);

module.exports = router;
