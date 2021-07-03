var Comment = require("../models/comment");

var commentController = {};

commentController.showAll = async function (req, res) {
  try {
    var comments = await Comment.find();
    res.status(200).jsonp({ comments: comments });
  } catch (error) {
    res.status(500).jsonp({ message: "Error showing all comments", error: error, });
  }
};

commentController.show = async function (req, res) {
  try {
    let id = req.params.id;
    var comment = await Comment.findOne({ _id: id });
    res.status(200).jsonp({ comment: comment });
  } catch (error) {
    res.status(500).jsonp({ message: "Error finding comment", error: error });
  }
};

commentController.create = async function (req, res) {
  try {
    var comment = await Comment.create(req.body);
    res.status(200).jsonp({ comment: comment });
  } catch (error) {
    res.status(500).jsonp({ message: "Error creating comment", error: error });
  }
};

commentController.edit = async function (req, res) {
  try {
    var comment = await Comment.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).jsonp({ comment: comment });
  } catch (error) {
    res.status(500).jsonp({ message: "Error editing comment", error: error });
  }
};

commentController.delete = async function (req, res) {
  try {
    var comment = await Comment.deleteOne({ _id: req.params.id });
    res.status(200).jsonp({ comment: comment });
  } catch (error) {
    res.status(500).jsonp({ message: "Error deleting comment", error: error });
  }
};

module.exports = commentController;
