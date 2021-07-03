var Region = require("../models/region");

var regionController = {};

regionController.showAll = async function (req, res) {
  try {
    var regions = await Location.find();
    res.status(200).jsonp({ regions: regions });
  } catch (error) {
    res.status(500).jsonp({ message: "Error showing all regions", error: error, });
  }
};

regionController.show = async function (req, res) {
  try {
    let id = req.params.id;
    var region = await Region.findOne({ _id: id });
    res.status(200).jsonp({ region: region });
  } catch (error) {
    res.status(500).jsonp({ message: "Error finding region", error: error });
  }
};

regionController.create = async function (req, res) {
  try {
    var region = await Region.create(req.body);
    res.status(200).jsonp({ region: region });
  } catch (error) {
    res.status(500).jsonp({ message: "Error creating region", error: error });
  }
};

regionController.edit = async function (req, res) {
  try {
    var region = await Region.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).jsonp({ region: region });
  } catch (error) {
    res.status(500).jsonp({ message: "Error editing region", error: error });
  }
};

regionController.delete = async function (req, res) {
  try {
    var region = await Region.deleteOne({ _id: req.params.id });
    res.status(200).jsonp({ region: region });
  } catch (error) {
    res.status(500).jsonp({ message: "Error deleting region", error: error });
  }
};

module.exports = regionController;
