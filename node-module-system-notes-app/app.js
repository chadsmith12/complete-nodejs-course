const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log(chalk.green("Adding a new note!"));
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

console.log(yargs.argv);