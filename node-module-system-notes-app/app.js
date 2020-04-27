const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        if(notes.addNote(argv.title, argv.body)) {
            console.log(chalk.green('Note added!'));
        } else {
            console.log(chalk.red('Note could not be added. Title taken'));
        }
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:  {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        if(notes.removeNote(argv.title)) {
            console.log(chalk.green('Note removed!'));
        } else {
            console.log(chalk.red('Note not found!'))
        }
    }
});

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
        console.log(chalk.blue('Your current notes: '))
        const currentNotes = notes.listNotes();
        currentNotes.forEach(note => {
            console.log(note)
        });
    }
});

yargs.command({
    command: 'read',
    describe: 'Read your notes',
    handler: () => {
        console.log(chalk.blue("Reading your note!"));
    }
});

yargs.parse();