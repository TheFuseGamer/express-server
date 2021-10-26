const express = require('express');

const carsController = require('./controllers/cars.controller.js');
const citiesController = require('./controllers/cities.controller.js');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const deltaTime = Date.now() - start;
    console.log(`[LOG][${new Date().toISOString()}] ${req.method} ${req.url} took ${deltaTime}ms`);

});

app.use(express.json());

// Welcome page route
app.get('/', (req, res) => {
    res.send('Welcome to my test server.');
});

// Car routes
app.post('/cars', carsController.addCar);
app.get('/cars', carsController.getCars);
app.get('/cars/:id', carsController.getCar);

// City routes
app.post('/cities', citiesController.addCity);
app.get('/cities', citiesController.getCities);
app.get('/cities/:id', citiesController.getCity);

app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}!`);
});