const { body } = require("express-validator");

const itemVariantCreateValidator = [
  body("item_id")
    .notEmpty().withMessage("Item ID is required")
    .isInt().withMessage("Item ID must be a number"),

  body("size_id")
    .optional()
    .isInt().withMessage("Size ID must be a number"),

  body("color_id")
    .optional()
    .isInt().withMessage("Color ID must be a number"),

  body("stock")
    .optional()
    .isInt({ min: 0 }).withMessage("Stock must be a non-negative number"),

  body("low_stock_threshold")
    .optional()
    .isInt({ min: 0 }).withMessage("Low stock threshold must be a non-negative number"),

  body("price")
    .notEmpty().withMessage("Price is required")
    .isFloat({ min: 0 }).withMessage("Price must be a positive number"),

  body("status")
    .optional()
    .isIn(["ACTIVE", "INACTIVE", "OUT OF STOCK"]).withMessage("Status must be 'ACTIVE', 'INACTIVE', or 'OUT OF STOCK'"),
];

const itemVariantUpdateValidator = [
  body("size_id")
    .optional()
    .isInt().withMessage("Size ID must be a number"),

  body("color_id")
    .optional()
    .isInt().withMessage("Color ID must be a number"),

  body("stock")
    .optional()
    .isInt({ min: 0 }).withMessage("Stock must be a non-negative number"),

  body("low_stock_threshold")
    .optional()
    .isInt({ min: 0 }).withMessage("Low stock threshold must be a non-negative number"),

  body("price")
    .optional()
    .isFloat({ min: 0 }).withMessage("Price must be a positive number"),

  body("status")
    .optional()
    .isIn(["ACTIVE", "INACTIVE", "OUT OF STOCK"]).withMessage("Status must be 'ACTIVE', 'INACTIVE', or 'OUT OF STOCK'"),
];

module.exports = {
  itemVariantCreateValidator,
  itemVariantUpdateValidator,
};
