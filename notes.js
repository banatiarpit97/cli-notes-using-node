const fs = require('fs');

function add(title, body){
    let notes = getFileData();
    if(presentOrNot(notes, title)){
        console.log('Note with this title already present');
        return;
    }
    console.log(`Adding note with title '${title}' and body '${body}'`);
    const data = {title:title, body:body};
    notes.push(data);
    writeToFile(
        JSON.stringify(notes),
        `Note added with title '${title}' and body '${body}'`);
}

function remove(title){
    let notes = getFileData();
    if (!presentOrNot(notes, title)) {
        console.log('Note with this title is not present');
        return;
    }
    console.log(`Deleting note with title '${title}'`);
    updatedNotes = notes.filter((note) => {
        return note.title !== title;
    })
    writeToFile(
        JSON.stringify(updatedNotes),
        `Note deleted with title '${title}'`
    )
}

function edit(title, body){
    let notes = getFileData();
    if (!presentOrNot(notes, title)) {
        console.log('Note with this title is not present');
        return;
    }
    console.log(`Editing note with title '${title}'`);
    notes.forEach((note, index) => {
        if(note.title === title){
            note.body = body;
        }
    });
    writeToFile(
        JSON.stringify(notes),
        `Note edited with title '${title}'`
    )
}

function showNote(title){
    let notes = getFileData();
    let note = presentOrNot(notes, title);
    if (!note) {
        console.log('Note with this title is not present');
        return;
    }
    console.log(`TITLE : ${note.title}`);
    console.log(`BODY : ${note.body}`);
}

function showAllNotes(){
    let notes = getFileData();
    if(!notes.length){
        console.log('No notes to show');
        return;
    }
    notes.forEach(note => {
        console.log(`TITLE : ${note.title}`);
        console.log(`BODY : ${note.body}`);
        spacer();
    }) 
}

function getFileData(){
    let notes;
    try {
        notes = fs.readFileSync('notes.json');
        notes = JSON.parse(notes);
    } catch (e) {
        notes = [];
    }
    finally {
        return notes;
    }
}

function writeToFile(notes, msg){
    fs.writeFile('notes.json', notes, (err) => {
        if (err) {
            throw err;
        }
        console.log(msg)
    })
}

function toJson(str){
    return JSON.stringify(str);
}

function spacer(){
    console.log('---------------------------------------------------------------')
}

function presentOrNot(notes, title){
    let flag = false;
    notes.forEach(note => {
        if (note.title == title) {
            flag = note;
            return;
        }
    })  
    return flag;
}
module.exports = {
    add,
    remove,
    edit,
    showNote,
    showAllNotes
}