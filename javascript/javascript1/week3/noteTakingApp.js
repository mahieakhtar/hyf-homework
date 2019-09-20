const notes = [];

function addNote(id, content) {
    const notesObj = {};
    notesObj["id"] = id;
    notesObj["content"] = content;
    notes.push(notesObj);
    console.log(notes);
}

addNote(1, "Add Notes");
addNote(2, "Edit Notes");

function getNodeFromId(id) {
    if(id==null) {
        console.log("Id should be number")
    }
    for(let i=0;i<notes.length;i++) {
        if(notes[i].id===id) {
            return notes[i];
        }
    }
}

function getAllNotes() {
    return notes;
}

console.log(getNodeFromId(1));

console.log(notes);

function logOutNotesFormatted() {
    for(let i=0;i<notes.length;i++) {
        console.log("The note with id: "+notes[i].id+ ", has the following note text: "+notes[i].content);
    }
}
logOutNotesFormatted();