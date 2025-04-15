const { body } = require("express-validator");

const cartCreateValidator = [
  body("user_id")
    .notEmpty().withMessage("User ID is required")
    .isInt().withMessage("User ID must be a number"),

  body("item_variant_id")
    .notEmpty().withMessage("Item Variant ID is required")
    .isInt().withMessage("Item Variant ID must be a number"),

  body("quantity")
    .optional()
    .isInt({ min: 1 }).withMessage("Quantity must be at least 1"),
];

const cartUpdateValidator = [
  body("quantity")
    .notEmpty().withMessage("Quantity is required")
    .isInt({ min: 1 }).withMessage("Quantity must be at least 1"),
];

module.exports = {
  cartCreateValidator,
  cartUpdateValidator,
};
