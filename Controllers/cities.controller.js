const cities = [
    {
        id: 0,
        name: 'New York',
        country: 'USA'
    },
    {
        id: 1,
        name: 'Paris',
        country: 'France'
    },
    {
        id: 2,
        name: 'London',
        country: 'UK'
    }
]

function addCity(req, res) {
    if (!req.body.name || !req.body.country) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }
    const newCity = req.body;
    newCity.id = cities.length;
    cities.push(newCity);
    res.status(201).json(newCity);
}

function getCities(req, res) {
    res.status(200).json(cities);
}

function getCity(req, res) {
    const id = parseInt(req.params.id);
    const city = cities[id];
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