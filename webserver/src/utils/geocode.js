const request = require('postman-request');

/**
 * 
 * @param {String} location The location you want to the latitude and longitude for.
 * @param {Function} callback callback function when the latitude and longitude is received.
 * @returns {Object} The latitude, longitude, and placeName of the location you wanted to Geocode.
 */
const geocode = (location, callback) => {
    const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoidHdpZ21hbjA4IiwiYSI6ImNqajlneTYxZTFkdHEzcG1nd2Q4aHB1aTQifQ.J8Ir30Y1zbuQ2qfcZnzkMA&limit=1`;
    request(geoCodeUrl, {json: true}, (err, response) =>{
        const error = {
            message: 'Unable to connect to location services.'
        }
        if(err) {
            callback(error);
        }
        else if(response.body.features.length == 0) {
            error.message = 'Unable to find location.'
            callback(error);
        } else {
            const features = response.body.features[0];
            const center = features.center;
            const longitude = center[0];
            const latitude = center[1];
            callback(null, {latitude, longitude, placeName: features.place_name});
        }
    });
}

module.exports = geocode;