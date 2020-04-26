/**
 * This shows an example of using the file system (fs) module
 * This uses the writeFileSync and appentFileAsync example.
 */

const fs = require('fs');

// writes "Hello World" to the notes.txt file
fs.writeFileSync('notes.txt', 'Hello World!');
// appends to the notes.txt file.
fs.appendFileSync('notes.txt', ' I am appending this to the file!');