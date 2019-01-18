console.log("Starting app.js");

const yargs = require("yargs");

const notes = require("./notes.js");
const titleOptions = {
  describe: "Title of the note",
  demand: true,
  alias: "t"
};
const bodyOptions = {
  describe: "Body of the note",
  demand: true,
  alias: "b"
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List all note(s)")
  .command("read", "Read a note", {
    title: titleOptions
  })
  .command("remove", "Remove a specific note", {
    title: titleOptions
  })
  .help().argv;

let command = argv._[0];

console.log("command:", command);
console.log("yargs", argv);

switch (command) {
  case "add":
    const addedNote = notes.addNote(argv.title, argv.body);
    if (addedNote) {
      notes.logResult("Note successfully added", addedNote);
    } else {
      notes.logResult("Duplicated Note. Title already exists", {
        title: argv.title,
        body: argv.body
      });
    }
    break;
  case "list":
    notes.getAll().forEach((note, i) => {
      notes.logResult(`Note #${i + 1}`, note);
    });
    break;
  case "read":
    const readNote = notes.readNote(argv.title);
    if (readNote) {
      notes.logResult("Fetched note", readNote);
    } else {
      console.log("Note not found");
    }
    break;
  case "remove":
    const removedNote = notes.removeNote(argv.title);

    if (removedNote) {
      console.log("Note removed");
    } else {
      console.log("Note not found");
    }
    break;
  default:
    console.log("command not recognized");
}
