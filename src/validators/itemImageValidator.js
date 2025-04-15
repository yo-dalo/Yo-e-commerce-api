const { body } = require("express-validator");

const itemImageCreateValidator = [
  body("item_id")
    .notEmpty().withMessage("Item ID is required")
    .isInt().withMessage("Item ID must be a number"),

  body("img")
    .trim()
    .notEmpty().withMessage("Image URL is required")
    .isURL().withMessage("Image must be a valid URL"),
];

module.exports = {
  itemImageCreateValidator,
};
