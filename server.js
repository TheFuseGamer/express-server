const express = require('express');

const carsRouter = require('./routes/cars.router.js');
const citiesRouter = require('./routes/cities.router.js');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const deltaTime = Date.now() - start;
    console.log(`[LOG][${new Date().toISOString()}] ${req.method} ${req.baseUrl}${req.url} took ${deltaTime}ms`);

});

app.use(express.json());

app.use('/cars', carsRouter);
app.use('/cities', citiesRouter);

app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}!`);
});