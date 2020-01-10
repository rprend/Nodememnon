const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes...";
}

const inUse = (notes, title) => {

//   duplicateNotes = notes.filter((note) => note.title === title);
    duplicateNote = notes.find((note) => note.title === title);

    if (duplicateNote) {
        return true;
    }
    return false;
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);

    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const data = dataBuffer.toString();
        return JSON.parse(data);
    } catch {
        return [];
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();

    if (!inUse(notes, title)) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);

        console.log(chalk.green.inverse("New note added!"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"));
    }

}

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse("No note with that title found!"));
    } else {
       console.log(chalk.green.inverse("Removed note with title " + title));     
    }

    saveNotes(notesToKeep);
}

const listNotes = () => {
    console.log(chalk.blue.inverse("Your notes:"));

    const notes = loadNotes();

    notes.forEach((note) => {
        console.log(chalk.magenta(note.title + ": ") + note.body);
    });
}

const readNote = (title) => {
    console.log("Reading note with title " + title);

    const notes = loadNotes();

    const toRead = notes.find((note) => note.title == title);

    if (toRead) {
        console.log(chalk.magenta(toRead.title + ": ") + toRead.body);
    } else {
        console.log(chalk.red.inverse("No note with that title!"));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};