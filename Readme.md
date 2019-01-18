# Simple Note App using nodeJs

- Clone the repo
- Run `npm install`

## Usage

Navigate into the directory and run
`node app.js --help` to get information about additinal flags or
`node app.js command --help` to get information about additinal flags for the command

### Available Commands

- `add` => Add a new note

  - Flags
    - `--title`, `-t` => Note title
    - `--body`, `-b` => Note body content

- `list` => List all notes

- `read` => Read a note

  - Flags
    - `--title`, `-t` => Search for a specific note

- `remove` => Remove a specific note
  - Flags
    - `--title`, `-t` => Specifiy the title of the note which you want to delete
