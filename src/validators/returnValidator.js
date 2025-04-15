const { body } = require("express-validator");

const returnCreateValidator = [
  body("order_id")
    .optional()
    .isInt().withMessage("Order ID must be a number"),

  body("user_id")
    .optional()
    .isInt().withMessage("User ID must be a number"),

  body("reason")
    .optional()
    .isString().withMessage("Reason must be a valid text"),

  body("status")
    .optional()
    .isIn(["PENDING", "APPROVED", "REJECTED", "COMPLETED"])
    .withMessage("Status must be 'PENDING', 'APPROVED', 'REJECTED', or 'COMPLETED'"),
];

module.exports = {
  returnCreateValidator,
};
