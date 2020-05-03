const express = require('express');

const app = express();

// routes
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Chad',
        age: 30
    });
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Arlington, Texas',
        currentTemp: 74,
        feelsLike: 73
    });
})


// startup server
app.listen(3000, () => {
    console.log('Server has started on port 3000');
});