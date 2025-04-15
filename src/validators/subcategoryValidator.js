const { body } = require("express-validator");

const subCategoryCreateValidator = [
  body("category_id")
    .notEmpty().withMessage("Category ID is required")
    .isInt().withMessage("Category ID must be a number"),

  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ max: 100 }).withMessage("Name must not exceed 100 characters"),

  body("slug")
    .trim()
    .notEmpty().withMessage("Slug is required")
    .isLength({ max: 150 }).withMessage("Slug must not exceed 150 characters"),

  body("img")
    .optional()
    .isURL().withMessage("Image must be a valid URL"),

  body("status")
    .optional()
    .isIn(["ACTIVE", "INACTIVE"]).withMessage("Status must be either 'ACTIVE' or 'INACTIVE'"),

  body("created_by")
    .optional()
    .isInt().withMessage("Created By must be a number"),

  body("updated_by")
    .optional()
    .isInt().withMessage("Updated By must be a number"),
];

const subCategoryUpdateValidator = [
  body("name")
    .optional()
    .trim()
    .notEmpty().withMessage("Name cannot be empty")
    .isLength({ max: 100 }).withMessage("Name must not exceed 100 characters"),

  body("slug")
    .optional()
    .trim()
    .notEmpty().withMessage("Slug cannot be empty")
    .isLength({ max: 150 }).withMessage("Slug must not exceed 150 characters"),

  body("img")
    .optional()
    .isURL().withMessage("Image must be a valid URL"),

  body("status")
    .optional()
    .isIn(["ACTIVE", "INACTIVE"]).withMessage("Status must be either 'ACTIVE' or 'INACTIVE'"),

  body("updated_by")
    .optional()
    .isInt().withMessage("Updated By must be a number"),
];

module.exports = {
  subCategoryCreateValidator,
  subCategoryUpdateValidator,
};
