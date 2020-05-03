const getWeatherForecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const location = process.argv[2];
if(!location) {
    console.log('Please enter a location');
}
else {
    geocode(location, (err, response) => {
        if(err) {
            console.log(err.message);
        } else {
            getWeatherForecast(response, (weatherErr, weatherResponse) => {
                if(weatherErr) {
                    console.log(weatherErr.message);
                }
                else {
                    const forecast = `Currently in ${response.placeName} it is ${weatherResponse}`
                    console.log(forecast);
                }
            })
        }
    })
}

