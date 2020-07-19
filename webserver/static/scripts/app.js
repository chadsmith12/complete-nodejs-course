console.log("Client side javascript file is loaded!");

const locationForm = document.querySelector('#locationForm');
const searchText = document.querySelector('#search');


const getWeather = (searchLocation) => {
    const url = `/weather?address=${searchLocation}`;
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
            response.json().then((data) => {
                resolve(data);
            })
        }).catch((error) =>{
            reject(error);
        });
    });
}


locationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = searchText.value;
    if(!location) {
        console.log('Please enter a location');
        return false;
    }
    getWeather(location).then((data) => {
        if(data.error)  {
            console.log(data.error)
        } else  {
            console.log(data.forecast)
            console.log(data.location);
        }
    });
});