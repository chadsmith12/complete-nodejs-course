const fs = require('fs');

/**
 * Adds a new note to the notes file.
 * Will not add a note if the title is being duplicated.
 * @param {String} title The title of the note you want to add
 * @param {String} body The body of the note you want to add
 * @returns {boolean} True if the notes was added; otherwise, false.
 */
function addNote(title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);

    if(duplicateNotes.length > 0) {
        return false;
    }

    notes.push({title: title, body, body});
    saveNotes(notes);

    return true;
}

/**
 * Removes a previously saved note from the notes.json file by the title.
 * @param {String} title The title of the note you want to remove
 * @returns Returns true if the note was removed; otherwise, false.
 */
function removeNote(title)  {
    const notes = loadNotes();
    const otherNotes = notes.filter(note => note.title !== title);

    if(otherNotes.length === notes.length) {
        return false;
    }

    saveNotes(otherNotes);

    return true;
}

/**
 * Returns all of the notes titles.
 * @returns {Array} Titles of all the notes.
 */
function listNotes() {
    return loadNotes().map(note => note.title);
}

/**
 * Gets a note by the title
 * @param {String} title The title of the note.
 * @returns {Object} the note found, otherwise null if it can't find the note.
 */
function getNote(title) {
    const notes = loadNotes();
    const foundNote = notes.find(note => note.title === title);

    if(!foundNote) {
        return null;
    }

    return foundNote;
}

/**
 * Loads the notes up from the notes.json file.
 * If the file can't load, will return an empty array.
 * @returns {Array} The array of notes.
 */
function loadNotes() {
    try {
        const noteBuffer = fs.readFileSync('notes.json');
        const noteJson = noteBuffer.toString();
    
        return JSON.parse(noteJson);
    } catch {
        return [];
    }
}

/**
 * Save the notes array to notes.json
 * @param {Array} notes The notes you want to save
 */
function saveNotes(notes) {
    const notesJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJson);
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    getNote
};