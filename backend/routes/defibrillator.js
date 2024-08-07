const express = require('express');
const router = express.Router();
const Defibrillator = require('../models/Defibrillator');

// Get all defibrillators
router.get('/', async (req, res) => {
    try {
        const defibrillators = await Defibrillator.find();
        res.json(defibrillators);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new defibrillator
router.post('/', async (req, res) => {
    const { name, address, latitude, longitude, description, addedBy } = req.body;
    const newDefibrillator = new Defibrillator({
        name, address, latitude, longitude, description, addedBy
    });
    try {
        const savedDefibrillator = await newDefibrillator.save();
        res.status(201).json(savedDefibrillator);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
