const fs = require("fs");

const checkIfAlreadyExist = title =>
  getAll().filter(note => note.title === title);

const saveNotes = notes => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = getAll();
  const newNote = { title, body };

  if (checkIfAlreadyExist(title).length === 0) {
    notes.push(newNote);
    saveNotes(notes);
    return newNote;
  } else {
    return false;
  }
};

const getAll = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json"));
  } catch (error) {
    return [];
  }
};

const readNote = title => {
  return checkIfAlreadyExist(title)[0];
};

const removeNote = title => {
  const notes = getAll();
  const newNotes = notes.filter(note => note.title !== title);
  saveNotes(newNotes);

  return notes.length !== newNotes.length;
};

const logResult = (action, note) => {
  console.log(`\n${action}`);
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
  logResult
};
