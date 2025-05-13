const express = require("express");
const router = express.Router();
const couponController = require("../controllers/couponController");

router.get("/", couponController.getAll);
router.get("/:id", couponController.getById);
router.get("/update/:id", couponController.getByIdForUpdate);
router.post("/", couponController.create);
router.put("/:id", couponController.update);
router.delete("/:id", couponController.delete);

module.exports = router;
