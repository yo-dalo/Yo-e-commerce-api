const { body } = require("express-validator");

const wishlistCreateValidator = [
  body("user_id")
    .notEmpty().withMessage("User ID is required")
    .isInt().withMessage("User ID must be a number"),

  body("item_id")
    .notEmpty().withMessage("Item ID is required")
    .isInt().withMessage("Item ID must be a number"),
];

module.exports = {
  wishlistCreateValidator,
};
