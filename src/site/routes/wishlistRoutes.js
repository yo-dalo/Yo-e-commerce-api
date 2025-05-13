const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlistController");

router.get("/", wishlistController.getAll);
router.get("/:id", wishlistController.getById);
router.get("/update/:id", wishlistController.getByIdForUpdate);
router.post("/", wishlistController.create);
router.put("/:id", wishlistController.update);
router.delete("/:id", wishlistController.delete);

module.exports = router;
