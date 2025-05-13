const express = require('express');
const router = express.Router();
const { authenticateUser, authorizeRoles } = require('../middleware/authMiddleware');
const {
    createShippingDetail,
    getShippingDetails,
    getShippingDetailById,
    getShippingDetailByOrderId,
    updateShippingDetail,
    deleteShippingDetail
} = require('../controllers/shippingController');
const { shippingValidator } = require('../validators/shippingValidator');
const validateRequest = require('../middleware/validator');

// Create Shipping Detail (Admin Only)
router.post('/', authenticateUser, authorizeRoles('admin'), shippingValidator, validateRequest, createShippingDetail);

// Get All Shipping Details (Admin Only)
router.get('/', authenticateUser, authorizeRoles('admin'), getShippingDetails);

// Get Shipping Detail by ID
router.get('/:id', authenticateUser, authorizeRoles('admin'), getShippingDetailById);

// Get Shipping Detail by Order ID
router.get('/order/:order_id', authenticateUser, authorizeRoles('admin'), getShippingDetailByOrderId);

// Update Shipping Detail
router.put('/:id', authenticateUser, authorizeRoles('admin'), shippingValidator, validateRequest, updateShippingDetail);

// Delete Shipping Detail
router.delete('/:id', authenticateUser, authorizeRoles('admin'), deleteShippingDetail);

module.exports = router;
