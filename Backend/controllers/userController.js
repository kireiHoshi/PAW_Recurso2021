var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var config = require("../authconfig");

var User = require("../models/user");

var userController = {};

userController.showAll = async function (req, res) {
  try {
    var query = req.query;
    var users = await User.find(query).populate("type"); //popular o campo type com informação
    res.status(200).jsonp({ users: users });
  } catch (error) {
    res.status(500).render({ message: "Error finding users", error: error });
  }
};

userController.show = async function (req, res) {
  try {
    let id = req.params.id;
    var user = await User.findOne({ _id: id }).populate("type"); //popular o campo type com informação
    res.status(200).jsonp({ user: user });
  } catch (error) {
    res.status(500).jsonp({ message: "Error finding user", error: error });
  }
};

userController.register = async function (req, res) {
  try {
    var hashedPass = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hashedPass;
    var user = await new User(req.body).save();
    if (user != null) {
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400,
      });
      res.status(200).jsonp({ user: user, token: token });
    }
  } catch (error) {
    res.status(500).jsonp({ message: "Error registering user", error: error });
  }
};

userController.login = async function (req, res) {
  try {
    var user = await User.findOne({ email: req.body.email });

    if (user == null) res(404).jsonp({});

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400,
    });
    return res.status(200).send({ auth: true, token: token, user: user });
  } catch (err) {
    return res
      .status(500)
      .jsonp({ message: "Error logging in user.", error: err });
  }
};

userController.logout = function (req, res) {
  try {
    res.status(200).send({ auth: false, token: null });
  } catch (error) {
    res.jsonp({ message: "Error logout user", error: error });
  }
};

userController.edit = async function (req, res) {
  try {
    var id = req.params.id;
    var body = {};

    var user = await User.findOne({ _id: id });

    if (!user) {
      res
        .status(404)
        .jsonp({ message: "User not found", error: "User not found." });
    }

    if (req.body.oldPassword != "") {
      if (bcrypt.compareSync(req.body.oldPassword, user.password)) {
        var hashedPass = bcrypt.hashSync(req.body.newPassword, 8);
        body.password = hashedPass;
      } else {
        res
          .status(400)
          .jsonp({
            message: "Error editing user",
            error: "Old password is wrong",
          });
      }
    }

    body.name = req.body.name;
    user = await User.findOneAndUpdate({ _id: id }, body);
    if (!user) res.status(404).jsonp({});
    res.status(200).jsonp({ user: user });
  } catch (error) {
    res.status(500).jsonp({ message: "Error editing user", error: error });
  }
};

userController.delete = async function (req, res) {
  try {
    let id = req.params.id;
    var user = await User.deleteOne({ _id: id });
    res.status(200).jsonp({ user: user });
  } catch (error) {
    res.status(500).jsonp({ message: "Error deleting user", error: error });
  }
};

/**
 * AUTHENTICATION
 */

userController.verifyToken = function (req, res, next) {
  var token = req.headers["authorization"];
  if (token == null)
    return res.status(403).send({ auth: false, message: "No token provided." });

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    req.userId = decoded.id;

    next();
  });
};

module.exports = userController;
