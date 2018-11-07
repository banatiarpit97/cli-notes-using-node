const yargs = require('yargs');
const notes = require('./notes');
const argv = yargs.argv;

const command = argv['_'];
if(!command.length){
    console.log("Enter a command");
}
else{
    if(command[0] == "add"){
        if(validate(true, true)){
            notes.add(argv.title, argv.body);
        }
    }
    else if (command[0] == "remove") {
        if (validate(true, false)) {
            notes.remove(argv.title);
        }
    }
    else if (command[0] == "edit") {
        if (validate(true, true)) {
            notes.edit(argv.title, argv.body);
        }
    }
    else if (command[0] == "show-note") {
        if (validate(true, false)) {
            notes.showNote(argv.title);
        }
    }
    else if (command[0] == "show-all-notes"){
        if (validate(false, false)) {
            notes.showAllNotes();
        }
    }
    else if(command[0] == 'help-me'){
        console.log('Welcome to CLI Notes App');
        console.log('add(title, body) : To add a new note');
        console.log('edit(title, body) : To edit an existing note');
        console.log('remove(title) : To remove an existing note');
        console.log('show-note(title) : To view an existing note');
        console.log('show-all-notes() : To view all existing notes');
        console.log('\n');
        console.log('To enter title use --title="title-string"');
        console.log('To enter body use --body="body-string"');
    }
    else{
        console.log("Not a valid command, use 'help-me' command to view all possible actions")
    }
}

function validate(title, body){
    if(title){
        if(!argv.title){
            console.log("Enter title of note");
            return false;
        }
    }

    if (body) {
        if (!argv.body) {
            console.log("Enter body of note");
            return false;
        }
    }
    return true;
}