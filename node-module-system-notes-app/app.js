const chalk = require('chalk');
const yargs = require('yargs');

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
        console.log(chalk.green('Title: ') + argv.title);
        console.log(chalk.green('Body: ') + argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log(chalk.blue("Removing a note!"));
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
        console.log(chalk.blue("Listing your note!"));
    }
})

yargs.command({
    command: 'read',
    describe: 'Read your notes',
    handler: () => {
        console.log(chalk.blue("Reading your note!"));
    }
})

yargs.parse();