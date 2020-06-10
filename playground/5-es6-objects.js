// object property shorthand
const name = 'Chad';
const userAge = 30;

const user = {
    name,
    userAge,
    location: 'Texas'
}

const transaction = (type, {name = "User", location = "Somewhere"} = {}) => {
    console.log(type, name, location);
}

transaction('order')
transaction('order', user)