var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var LocationSchema = new mongoose.Schema({
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, unique: true, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    region: { type: Schema.Types.ObjectId, ref: "Region", required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: "Like", required: true }],
    dislikes: [{ type: Schema.Types.ObjectId, ref: "Dislike", required: true }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment", required: true }],
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
});


module.exports = mongoose.model('Location', LocationSchema);