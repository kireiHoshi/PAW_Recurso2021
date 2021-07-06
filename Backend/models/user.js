var mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Location = require('../models/location');

var UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true }
});

 UserSchema.pre('deleteOne', async function(next) {
  let location = await Location.find({ author: mongoose.Types.ObjectId(this.getQuery()._id) });
  if (location.length > 0) {
      var err = new Error('This user has created locations.');
      next(err);
  }
  else {
      next();
  } 
})

module.exports = mongoose.model("User", UserSchema);