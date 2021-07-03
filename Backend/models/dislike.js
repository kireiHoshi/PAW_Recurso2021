var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var DislikeSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    location: { type: Schema.Types.ObjectId, ref: "Location", required: true }
});


module.exports = mongoose.model('Dislike', DislikeSchema);