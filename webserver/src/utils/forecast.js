const request = require('postman-request');

/**
 * 
 * @param {Object} location The locatin object that has the longitude and latitude
 * @param {Function} callback Callback function called when the weather forecast is updated.
 * @returns {String} The forecast string.
 */
const getWeatherForecast = ({latitude, longitude} = {}, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=1a29f6a533f78dd648f97c6d7f23bee9&query=${latitude},${longitude}&units=f`;

    request(url, {json: true}, (err, response) => {
        const error = {
            message: 'Unable to connect to location services.'
        }
        if(err) {
            callback(error);
        } else if(response.body.error) {
            error.message = 'Unable to find location';
        } else {
            const data = response.body;
            const current = data.current;
            const description = current.weather_descriptions[0];
            const forecastString = `${description} and it is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out`;

            callback(null, forecastString);
        }
    })
}

module.exports = getWeatherForecast;