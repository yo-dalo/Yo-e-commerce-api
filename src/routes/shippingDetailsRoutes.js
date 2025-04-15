const express = require("express");
const router = express.Router();
const shippingDetailsController = require("../controllers/shippingDetailsController");

router.get("/", shippingDetailsController.getAll);
router.get("/:id", shippingDetailsController.getById);
router.get("/update/:id", shippingDetailsController.getByIdForUpdate);
router.post("/", shippingDetailsController.create);
router.put("/:id", shippingDetailsController.update);
router.delete("/:id", shippingDetailsController.delete);

module.exports = router;
