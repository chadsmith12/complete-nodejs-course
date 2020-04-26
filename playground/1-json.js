const fs = require('fs');
const dataBuffer = fs.readFileSync('1-json.json');
const person = JSON.parse(dataBuffer.toString());

person.name = "Chad";
person.age = 30;

fs.writeFileSync('1-json.json', JSON.stringify(person));