var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var LikeSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    location: { type: Schema.Types.ObjectId, ref: "Location", required: true }
});


module.exports = mongoose.model('Like', LikeSchema);