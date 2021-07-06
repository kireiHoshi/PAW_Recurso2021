var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var LocationSchema = new mongoose.Schema({
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, unique: true, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    region: { type: Schema.Types.ObjectId, ref: "Region", required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
    dislikes: [{ type: Schema.Types.ObjectId, ref: "Dislike" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}],
    latitude: { type: Number },
    longitude: { type: Number },
    visibility: { type: Boolean, default: false }
});


module.exports = mongoose.model('Location', LocationSchema);