var Like = require("../models/like");

var likeController = {};

likeController.showAll = async function (req, res) {
  try {
    var likes = await Like.find();
    res.status(200).jsonp({ likes: likes });
  } catch (error) {
    res.status(500).jsonp({ message: "Error showing all likes", error: error, });
  }
};

likeController.show = async function (req, res) {
  try {
    let id = req.params.id;
    var like = await Like.findOne({ _id: id });
    res.status(200).jsonp({ like: like });
  } catch (error) {
    res.status(500).jsonp({ message: "Error finding like", error: error });
  }
};

likeController.create = async function (req, res) {
  try {
    var like = await Like.create(req.body);
    res.status(200).jsonp({ like: like });
  } catch (error) {
    res.status(500).jsonp({ message: "Error creating like", error: error });
  }
};

likeController.edit = async function (req, res) {
  try {
    var like = await Like.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).jsonp({ like: like });
  } catch (error) {
    res.status(500).jsonp({ message: "Error editing like", error: error });
  }
};

likeController.delete = async function (req, res) {
  try {
    var like = await Like.deleteOne({ _id: req.params.id });
    res.status(200).jsonp({ like: like });
  } catch (error) {
    res.status(500).jsonp({ message: "Error deleting like", error: error });
  }
};

module.exports = likeController;
