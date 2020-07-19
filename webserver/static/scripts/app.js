console.log("Client side javascript file is loaded!");

const locationForm = document.querySelector('#locationForm');
const searchText = document.querySelector('#search');
const messageInfoElem  = document.querySelector('#messageInfo')
const weatherInfoElem = document.querySelector('#weatherInformation');

const setMessages = (messageInfo, weatherInfo) => {
    messageInfoElem.textContent = messageInfo;
    weatherInfoElem.textContent = weatherInfo;
}

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
        setMessages('Plese enter a location', '');
        return false;
    }
    setMessages('Loading...', '');
    getWeather(location).then((data) => {
        if(data.error)  {
            setMessages(data.error, '');
        } else  {
            setMessages(data.forecast, data.location);
        }
    });
});