const model = require('../models/cars.model.js');

function addCar(req, res) {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }
    const newCar = req.body;
    newCar.id = model.length;
    model.push(newCar);
    res.status(201).json(newCar);
}

function getCars(req, res) {
    res.status(200).json(model);
}

function getCar(req, res) {
    const id = parseInt(req.params.id);
    const car = model[id];
    if (car) {
        res.status(200).json(car);
    } else {
        res.status(404).json({ error: 'Car not found' });
    }
}

module.exports = {
    addCar,
    getCars,
    getCar
}