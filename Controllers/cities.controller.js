const model = require('../models/cities.model.js');

function addCity(req, res) {
    if (!req.body.name || !req.body.country) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }
    const newCity = req.body;
    newCity.id = model.length;
    model.push(newCity);
    res.status(201).json(newCity);
}

function getCities(req, res) {
    res.status(200).json(model);
}

function getCity(req, res) {
    const id = parseInt(req.params.id);
    const city = model[id];
    if (city) {
        res.status(200).json(city);
    } else {
        res.status(404).json({ error: 'City not found' });
    }
}

module.exports = {
    addCity,
    getCities,
    getCity
}