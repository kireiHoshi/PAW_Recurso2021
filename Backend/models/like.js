var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var LikeSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    location: { type: Schema.Types.ObjectId, ref: "Location", required: true },
    visibility: { type: Boolean, default: false }
});


module.exports = mongoose.model('Like', LikeSchema);