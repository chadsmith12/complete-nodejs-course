const https = require('https');

const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Arlington Texas.json?access_token=pk.eyJ1IjoidHdpZ21hbjA4IiwiYSI6ImNqajlneTYxZTFkdHEzcG1nd2Q4aHB1aTQifQ.J8Ir30Y1zbuQ2qfcZnzkMA&limit=1`;

const request = https.request(geoCodeUrl, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (err)  => {
    console.log('an error: ', err);
})

request.end();