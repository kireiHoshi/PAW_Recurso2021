var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Location = require('../models/location');

var RegionSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true }
});

RegionSchema.pre('deleteOne', async (next) => {
    let location = await Location.find({ region: this.name });
    if (location.length) {
        var err = new Error('This region has locations.');
        next(err);
    }
    else {
        next();
    }
})

module.exports = mongoose.model('Region', RegionSchema);