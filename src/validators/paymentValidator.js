const { body } = require("express-validator");

const paymentCreateValidator = [
  body("order_id")
    .notEmpty().withMessage("Order ID is required")
    .isInt().withMessage("Order ID must be a number"),

  body("order_amount")
    .notEmpty().withMessage("Order amount is required")
    .isFloat({ min: 0 }).withMessage("Order amount must be a positive number"),

  body("order_currency")
    .notEmpty().withMessage("Order currency is required")
    .isLength({ max: 10 }).withMessage("Currency code must not exceed 10 characters"),

  body("payment_status")
    .optional()
    .isIn(["PENDING", "SUCCESS", "FAILED", "REFUNDED"])
    .withMessage("Payment status must be 'PENDING', 'SUCCESS', 'FAILED', or 'REFUNDED'"),
];

module.exports = {
  paymentCreateValidator,
};
