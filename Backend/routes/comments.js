var express = require("express");
var router = express.Router();
var commentController = require("../controllers/commentController");
var userController = require("../controllers/userController");

router.get("/", userController.verifyToken, commentController.showAll);
router.get("/:id", userController.verifyToken, commentController.show);
router.post("/", userController.verifyToken, commentController.create);
router.put("/:id", userController.verifyToken, commentController.edit);
router.delete("/:id", userController.verifyToken, commentController.delete);

module.exports = router;