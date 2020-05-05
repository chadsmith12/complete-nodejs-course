const path = require('path');
const express = require('express');

const staticAssets = path.join(__dirname, '../static');

const app = express();

app.use(express.static(staticAssets));

// routes
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