const { body } = require("express-validator");

const refundCreateValidator = [
  body("return_id")
    .optional()
    .isInt().withMessage("Return ID must be a number"),

  body("payment_id")
    .optional()
    .isInt().withMessage("Payment ID must be a number"),

  body("refund_amount")
    .optional()
    .isFloat({ min: 0 }).withMessage("Refund amount must be a positive number"),

  body("status")
    .optional()
    .isIn(["PENDING", "SUCCESS", "FAILED"])
    .withMessage("Status must be 'PENDING', 'SUCCESS', or 'FAILED'"),
];

module.exports = {
  refundCreateValidator,
};
