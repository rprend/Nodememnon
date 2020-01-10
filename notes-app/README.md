## Notes App
Terminal based Nodejs application. Maintains persistent notes storage in a JSON file. Run as follows:

node app.js $COMMAND --ARGS=vals

Valid values for COMMAND are:
1. list (No args): Lists all notes saved
2. add --title="String title" --body="String body"
3. remove --title="String title"
4. read --title="String title"

Type node app.js --help for full list
