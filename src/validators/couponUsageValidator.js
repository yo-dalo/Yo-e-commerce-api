const { body } = require("express-validator");

const couponUsageCreateValidator = [
  body("user_id")
    .notEmpty().withMessage("User ID is required")
    .isInt().withMessage("User ID must be a number"),

  body("coupon_id")
    .notEmpty().withMessage("Coupon ID is required")
    .isInt().withMessage("Coupon ID must be a number"),

  body("order_id")
    .notEmpty().withMessage("Order ID is required")
    .isInt().withMessage("Order ID must be a number"),

  body("used_at")
    .optional()
    .isISO8601().withMessage("Used at must be a valid timestamp"),
];

module.exports = {
  couponUsageCreateValidator,
};
