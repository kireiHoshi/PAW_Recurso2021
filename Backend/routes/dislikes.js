var express = require("express");
var router = express.Router();
var dislikeController = require("../controllers/dislikeController");
var userController = require("../controllers/userController");

router.get("/", userController.verifyToken, dislikeController.showAll);
router.get("/:id", userController.verifyToken, dislikeController.show);
router.post("/", userController.verifyToken, dislikeController.create);
router.put("/:id", userController.verifyToken, dislikeController.edit);
router.delete("/:id", userController.verifyToken, dislikeController.delete);

module.exports = router;