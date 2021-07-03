var express = require("express");
var router = express.Router();
var likeController = require("../controllers/likeController");
var userController = require("../controllers/userController");

router.get("/", userController.verifyToken, likeController.showAll);
router.get("/:id", userController.verifyToken, likeController.show);
router.post("/", userController.verifyToken, likeController.create);
router.put("/:id", userController.verifyToken, likeController.edit);
router.delete("/:id", userController.verifyToken, likeController.delete);

module.exports = router;