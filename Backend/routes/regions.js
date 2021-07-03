var express = require("express");
var router = express.Router();
var regionController = require("../controllers/regionController");
var userController = require("../controllers/userController");

router.get("/", userController.verifyToken, regionController.showAll);
router.get("/:id", userController.verifyToken, regionController.show);
router.post("/", userController.verifyToken, regionController.create);
router.put("/:id", userController.verifyToken, regionController.edit);
router.delete("/:id", userController.verifyToken, regionController.delete);

module.exports = router;