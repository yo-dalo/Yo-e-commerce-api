const express = require("express");
const router = express.Router();
const refundController = require("../controllers/refundController");

router.get("/", refundController.getAll);
router.get("/:id", refundController.getById);
router.get("/update/:id", refundController.getByIdForUpdate);
router.post("/", refundController.create);
router.put("/:id", refundController.update);
router.delete("/:id", refundController.delete);

module.exports = router;
