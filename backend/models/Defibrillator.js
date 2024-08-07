const mongoose = require('mongoose');

const DefibrillatorSchema = new mongoose.Schema({
    name: String,
    address: String,
    latitude: Number,
    longitude: Number,
    description: String,
    addedBy: String,
    addedOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Defibrillator', DefibrillatorSchema);
