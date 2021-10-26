const express = require('express');

const carsController = require('../controllers/cars.controller.js');

const carsRouter = express.Router();

carsRouter.use((req, res, next) => {
    console.log(`Client with ip ${req.ip} accessing the cars route.`);
    next();
});

carsRouter.post('/', carsController.addCar);
carsRouter.get('/', carsController.getCars);
carsRouter.get('/:id', carsController.getCar);

module.exports = carsRouter;