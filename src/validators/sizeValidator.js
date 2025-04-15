const { body } = require('express-validator');

exports.sizeValidator = [
    body('size').notEmpty().withMessage('Size is required'),
    body('status')
        .isIn(['ACTIVE', 'INACTIVE'])
        .withMessage('Invalid status value')
];
