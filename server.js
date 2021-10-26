const express = require('express');
const app = express();

const PORT = 3000;

const cars = [
    {
        id: 0,
        name: 'Ford',
        price: '$100'
    },
    {
        id: 1,
        name: 'Chevy',
        price: '$200'
    },
    {
        id: 2,
        name: 'Honda',
        price: '$300'
    }
]

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const deltaTime = Date.now() - start;
    console.log(`[LOG][${new Date().toISOString()}] ${req.method} ${req.url} took ${deltaTime}ms`);

});

app.get('/', (req, res) => {
    res.send('Welcome to my test server.');
});

app.get('/cars', (req, res) => {
    res.status(200).json(cars);
});

app.get('/cars/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const car = cars[id];
    if (car) {
        res.status(200).json(car);
    } else {
        res.status(404).json({ error: 'Car not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}!`);
});