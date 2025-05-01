const { body } = require("express-validator");

const orderCreateValidator = [
  body("user_id")
    .notEmpty().withMessage("User ID is required")
    .isInt().withMessage("User ID must be a number"),

  body("payment_id")
    .optional()
    .trim()
    .isLength({ max: 20 }).withMessage("Payment ID must not exceed 20 characters"),

  body("status")
    .optional()
    .isIn(["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"])
    .withMessage("Status must be one of 'PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'"),

  body("payment_mode")
    .optional()
    .isIn(["COD", "ONLINE"]).withMessage("Payment mode must be 'COD' or 'ONLINE'"),

  body("shipping_id")
    .optional()
    .isInt().withMessage("Shipping ID must be a number"),
];

const orderUpdateValidator = [
  body("status")
    .optional()
    .isIn(["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"])
    .withMessage("Status must be one of 'PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'"),

  body("payment_mode")
    .optional()
    .isIn(["COD", "ONLINE"]).withMessage("Payment mode must be 'COD' or 'ONLINE'"),
];

module.exports = {
  orderCreateValidator,
  orderUpdateValidator,
};
