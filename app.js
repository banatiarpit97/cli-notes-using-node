const yargs = require('yargs');
const notes = require('./notes');
titleOptions = {
    describe: 'Title of note',
    demand:true,
    alias:'t'
}
bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}
const argv = yargs
    .command('add', 'Add a new note', {
        title:titleOptions,
        body:bodyOptions
    })
    .command('edit', 'Edit an existing note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('remove', 'Remove an existing note', {
        title: titleOptions,
    })
    .command('show-note', 'Show an existing note', {
        title: titleOptions,
    })
    .command('show-all-notes', 'Show all existing notes', {
        title: titleOptions,
    })
    .help()
    .argv;

const command = argv['_'];
if(!command.length){
    console.log("Enter a command");
}
else{
    if(command[0] == "add"){
        notes.add(argv.title, argv.body);
    }
    else if (command[0] == "remove") {
        notes.remove(argv.title);
    }
    else if (command[0] == "edit") {
        notes.edit(argv.title, argv.body);
    }
    else if (command[0] == "show-note") {
        notes.showNote(argv.title);
    }
    else if (command[0] == "show-all-notes"){
        notes.showAllNotes();
    }
    else{
        console.log("Not a valid command, use '--help' command to view all possible actions")
    }
}
