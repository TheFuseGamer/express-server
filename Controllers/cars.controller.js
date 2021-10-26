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

function addCar(req, res) {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }
    const newCar = req.body;
    newCar.id = cars.length;
    cars.push(newCar);
    res.status(201).json(newCar);
}

function getCars(req, res) {
    res.status(200).json(cars);
}

function getCar(req, res) {
    const id = parseInt(req.params.id);
    const car = cars[id];
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