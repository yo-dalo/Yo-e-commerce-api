const { body } = require("express-validator");

const couponCreateValidator = [
  body("code")
    .trim()
    .notEmpty().withMessage("Coupon code is required")
    .isLength({ max: 20 }).withMessage("Coupon code must not exceed 20 characters"),

  body("discount_percentage")
    .optional()
    .isFloat({ min: 0, max: 100 }).withMessage("Discount percentage must be between 0 and 100"),

  body("max_discount_amount")
    .optional()
    .isFloat({ min: 0 }).withMessage("Max discount amount must be a positive number"),

  body("min_order_amount")
    .optional()
    .isFloat({ min: 0 }).withMessage("Min order amount must be a positive number"),

  body("valid_from")
    .optional()
    .isISO8601().withMessage("Valid from must be a valid date"),

  body("valid_to")
    .optional()
    .isISO8601().withMessage("Valid to must be a valid date"),

  body("status")
    .optional()
    .isIn(["ACTIVE", "EXPIRED", "DISABLED"]).withMessage("Status must be 'ACTIVE', 'EXPIRED', or 'DISABLED'"),
];

const couponUpdateValidator = [
  body("code")
    .optional()
    .trim()
    .notEmpty().withMessage("Coupon code cannot be empty")
    .isLength({ max: 20 }).withMessage("Coupon code must not exceed 20 characters"),

  body("discount_percentage")
    .optional()
    .isFloat({ min: 0, max: 100 }).withMessage("Discount percentage must be between 0 and 100"),

  body("max_discount_amount")
    .optional()
    .isFloat({ min: 0 }).withMessage("Max discount amount must be a positive number"),

  body("min_order_amount")
    .optional()
    .isFloat({ min: 0 }).withMessage("Min order amount must be a positive number"),

  body("valid_from")
    .optional()
    .isISO8601().withMessage("Valid from must be a valid date"),

  body("valid_to")
    .optional()
    .isISO8601().withMessage("Valid to must be a valid date"),

  body("status")
    .optional()
    .isIn(["ACTIVE", "EXPIRED", "DISABLED"]).withMessage("Status must be 'ACTIVE', 'EXPIRED', or 'DISABLED'"),
];

module.exports = {
  couponCreateValidator,
  couponUpdateValidator,
};
