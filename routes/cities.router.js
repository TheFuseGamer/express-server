const express = require('express');

const citiesController = require('../controllers/cities.controller.js');

const citiesRouter = express.Router();

citiesRouter.post('/', citiesController.addCity);
citiesRouter.get('/', citiesController.getCities);
citiesRouter.get('/:id', citiesController.getCity);

module.exports = citiesRouter;