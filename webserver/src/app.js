const path = require('path');
const express = require('express');
const hbs = require('hbs');
const getWeatherForecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

// express config paths
const staticAssets = path.join(__dirname, '../static');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

const app = express();

// setting up view engine for hbs views directory
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

// setup the express static directory paths.
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
    const address = req.query.address;
    if(!address) {
        return res.send({
            error: 'You must provide an address'
        });
    }

    geocode(address, (err, geoCodeRes) => {
        if(err) {
            return res.send({
                error: err.message
            })
        }
        getWeatherForecast(geoCodeRes, (err, weatherRes) => {
            if(err) {
                return res.send({
                    error: err.message
                });
            }
            const forecast = `Currently in ${geoCodeRes.placeName} it is ${weatherRes}`
            res.send({
                location: geoCodeRes.placeName,
                address: address,
                forecast: forecast
            })
        })
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        res.send({
            error: 'Must provide search term'
        })
    }

    res.send({
        products: []
    });
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Not Found',
        name: 'Chad Smith',
        errorMessage: 'Oops! Help Article Not Found!'
    })
})

app.get('*',  (req,  res) => {
    res.render('404', {
        title: 'Not Found',
        name: 'Chad Smith',
        errorMessage: 'Oops! Page Not Found!'
    })
})

// startup server
app.listen(3000, () => {
    console.log('Server has started on port 3000');
});