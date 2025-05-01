const { body } = require("express-validator");

const userCreateValidator = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ max: 100 }).withMessage("Name must not exceed 100 characters"),

  body("phone")
    .trim()
    .notEmpty().withMessage("Phone number is required")
    .isLength({ max: 20 }).withMessage("Phone number must not exceed 20 characters")
    .matches(/^\d+$/).withMessage("Phone number must contain only digits"),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format")
    .isLength({ max: 100 }).withMessage("Email must not exceed 100 characters"),

  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),

  body("status")
    .optional()
    .isIn(["ACTIVE", "INACTIVE", "BLOCKED"]).withMessage("Status must be either 'ACTIVE', 'INACTIVE', or 'BLOCKED'"),

  body("role_id")
    .optional()
    .isInt().withMessage("Role ID must be a number"),
];

const userUpdateValidator = [
  body("name")
    .optional()
    .trim()
    .notEmpty().withMessage("Name cannot be empty")
    .isLength({ max: 100 }).withMessage("Name must not exceed 100 characters"),

  body("phone")
    .optional()
    .trim()
    .notEmpty().withMessage("Phone number cannot be empty")
    .isLength({ max: 20 }).withMessage("Phone number must not exceed 20 characters")
    .matches(/^\d+$/).withMessage("Phone number must contain only digits"),

  body("email")
    .optional()
    .trim()
    .notEmpty().withMessage("Email cannot be empty")
    .isEmail().withMessage("Invalid email format")
    .isLength({ max: 100 }).withMessage("Email must not exceed 100 characters"),

  body("password")
    .optional()
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),

  body("status")
    .optional()
    .isIn(["ACTIVE", "INACTIVE", "BLOCKED"]).withMessage("Status must be either 'ACTIVE', 'INACTIVE', or 'BLOCKED'"),

  body("role_id")
    .optional()
    .isInt().withMessage("Role ID must be a number"),
];

module.exports = {
  userCreateValidator,
  userUpdateValidator,
};
