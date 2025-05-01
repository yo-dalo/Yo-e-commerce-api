const { body } = require("express-validator");

const roleCreateValidator = [
  body("role_name")
    .notEmpty().withMessage("Role name is required")
    .isString().withMessage("Role name must be a valid string")
    .isLength({ max: 50 }).withMessage("Role name must not exceed 50 characters"),

  body("status")
    .optional()
    .isIn(["ACTIVE", "INACTIVE"])
    .withMessage("Status must be 'ACTIVE' or 'INACTIVE'"),
];

module.exports = {
  roleCreateValidator,
};
