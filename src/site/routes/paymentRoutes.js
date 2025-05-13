const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.get("/", paymentController.getAll);
router.get("/:id", paymentController.getById);
router.get("/update/:id", paymentController.getByIdForUpdate);
router.post("/", paymentController.create);
router.put("/:id", paymentController.update);
router.delete("/:id", paymentController.delete);

module.exports = router;
