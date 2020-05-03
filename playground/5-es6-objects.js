// object property shorthand
const name = 'Chad';
const userAge = 30;

const user = {
    name,
    userAge,
    location: 'Texas'
}

const transaction = (type, {name, location}) => {
    console.log(type, name, location);
}

transaction('order', user)