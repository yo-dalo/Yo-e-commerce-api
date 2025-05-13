const express = require("express");
const router = express.Router();
const returnController = require("../controllers/returnController");

router.get("/", returnController.getAll);
router.get("/:id", returnController.getById);
router.get("/update/:id", returnController.getByIdForUpdate);
router.post("/", returnController.create);
router.put("/:id", returnController.update);
router.delete("/:id", returnController.delete);

module.exports = router;
