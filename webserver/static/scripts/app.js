console.log("Client side javascript file is loaded!");

const url = '/weather?address=Boston';
fetch(url).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error);
        }
        else {
            console.log(data.location, data.forecast);
        }
    })
});