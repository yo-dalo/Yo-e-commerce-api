const { body } = require("express-validator");

const itemCreateValidator = [
  body("name")
    .trim()
    .notEmpty().withMessage("Item name is required")
    .isLength({ max: 100 }).withMessage("Item name must not exceed 100 characters"),

  body("description")
    .optional()
    .trim(),

  body("category_id")
    .notEmpty().withMessage("Category ID is required")
    .isInt().withMessage("Category ID must be a number"),

  body("subcategory_id")
    .optional()
    .isInt().withMessage("Subcategory ID must be a number"),

  body("status")
    .optional()
    .isIn(["ACTIVE", "INACTIVE", "OUT OF STOCK"]).withMessage("Status must be 'ACTIVE', 'INACTIVE', or 'OUT OF STOCK'"),

  body("created_by")
    .optional()
    .isInt().withMessage("Created By must be a number"),

  body("updated_by")
    .optional()
    .isInt().withMessage("Updated By must be a number"),
];

const itemUpdateValidator = [
  body("name")
    .optional()
    .trim()
    .notEmpty().withMessage("Item name cannot be empty")
    .isLength({ max: 100 }).withMessage("Item name must not exceed 100 characters"),

  body("description")
    .optional()
    .trim(),

  body("category_id")
    .optional()
    .isInt().withMessage("Category ID must be a number"),

  body("subcategory_id")
    .optional()
    .isInt().withMessage("Subcategory ID must be a number"),

  body("status")
    .optional()
    .isIn(["ACTIVE", "INACTIVE", "OUT OF STOCK"]).withMessage("Status must be 'ACTIVE', 'INACTIVE', or 'OUT OF STOCK'"),

  body("updated_by")
    .optional()
    .isInt().withMessage("Updated By must be a number"),
];

module.exports = {
  itemCreateValidator,
  itemUpdateValidator,
};
