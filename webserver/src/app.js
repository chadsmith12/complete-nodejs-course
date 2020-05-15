const path = require('path');
const express = require('express');

const staticAssets = path.join(__dirname, '../static');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(staticAssets));

// routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Chad Smith'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Chad Smith'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help!',
        msg: 'Use this application to look for the weather.'
    })
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