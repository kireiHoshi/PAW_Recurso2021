var Dislike = require("../models/dislike");
var Location = require("../models/location");

var dislikeController = {};

dislikeController.showAll = async function (req, res) {
  try {
    var dislikes = await Dislike.find();
    res.status(200).jsonp({ dislikes: dislikes });
  } catch (error) {
    res.status(500).jsonp({ message: "Error showing all dislikes", error: error, });
  }
};

dislikeController.show = async function (req, res) {
  try {
    let id = req.params.id;
    var dislike = await Dislike.findOne({ _id: id });
    res.status(200).jsonp({ dislike: dislike });
  } catch (error) {
    res.status(500).jsonp({ message: "Error finding dislike", error: error });
  }
};

dislikeController.create = async function (req, res) {
  try {
    var dislike = await Dislike.create(req.body);
    var location = await Location.findOne({_id: req.body.location});
    location.dislikes.push(dislike._id)
    location.save()
    res.status(200).jsonp({ dislike: dislike });
  } catch (error) {
    res.status(500).jsonp({ message: "Error creating dislike", error: error });
  }
};

dislikeController.edit = async function (req, res) {
  try {
    var dislike = await Dislike.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).jsonp({ dislike: dislike });
  } catch (error) {
    res.status(500).jsonp({ message: "Error editing dislike", error: error });
  }
};

dislikeController.delete = async function (req, res) {
  try {
    var dislike = await Dislike.deleteOne({ _id: req.params.id });
    res.status(200).jsonp({ dislike: dislike });
  } catch (error) {
    res.status(500).jsonp({ message: "Error deleting dislike", error: error });
  }
};

module.exports = dislikeController;
