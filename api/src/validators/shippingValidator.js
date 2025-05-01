const { body } = require('express-validator');

exports.shippingValidator = [
    body('order_id').isInt().withMessage('Order ID must be an integer'),
    body('address').notEmpty().withMessage('Address is required'),
    body('pincode').isLength({ min: 6, max: 10 }).withMessage('Invalid pincode'),
    body('city').notEmpty().withMessage('City is required'),
    body('state').notEmpty().withMessage('State is required'),
    body('tracking_no').optional().isLength({ max: 50 }).withMessage('Invalid tracking number'),
    body('status').isIn(['PENDING', 'SHIPPED', 'DELIVERED', 'RETURNED']).withMessage('Invalid status value'),
];
