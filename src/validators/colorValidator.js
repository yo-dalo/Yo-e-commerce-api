const { body } = require("express-validator");

const colorCreateValidator = [
  body("color")
    .trim()
    .notEmpty().withMessage("Color is required")
    .isLength({ max: 50 }).withMessage("Color must not exceed 50 characters"),

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

const colorUpdateValidator = [
  body("color")
    .optional()
    .trim()
    .notEmpty().withMessage("Color cannot be empty")
    .isLength({ max: 50 }).withMessage("Color must not exceed 50 characters"),

  body("status")
    .optional()
    .isIn(["ACTIVE", "INACTIVE"]).withMessage("Status must be either 'ACTIVE' or 'INACTIVE'"),

  body("updated_by")
    .optional()
    .isInt().withMessage("Updated By must be a number"),
];

module.exports = {
  colorCreateValidator,
  colorUpdateValidator,
};
