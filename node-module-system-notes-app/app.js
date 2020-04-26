const validator = require('validator');
const getNotes = require('./notes');

console.log(validator.isURL('https:mead.io'));
console.log(getNotes());