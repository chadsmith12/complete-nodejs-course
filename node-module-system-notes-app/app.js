const fs = require('fs');

fs.writeFileSync('notes.txt', 'Hello! Writing to the file first time! ')
fs.appendFileSync('notes.txt', 'This is being appended to the end');