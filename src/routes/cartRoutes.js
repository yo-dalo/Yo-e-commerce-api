const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/", cartController.getAll);
router.get("/:id", cartController.getById);
router.get("/update/:id", cartController.getByIdForUpdate);
router.post("/", cartController.create);
router.put("/:id", cartController.update);
router.delete("/:id", cartController.delete);

module.exports = router;
