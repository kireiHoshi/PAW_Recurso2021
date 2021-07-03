var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    location: { type: Schema.Types.ObjectId, ref: "Location", required: true },
    date: { type: Date, required: true },
    text: { type: String, required: true }
});


module.exports = mongoose.model('Comment', CommentSchema);