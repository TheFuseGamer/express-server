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

app.get('/', (req, res) => {
  res.send('Welcome to my test server.');
});

app.get('/cars', (req, res) => {
    res.status(200).json(cars);
});

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}!`);
});