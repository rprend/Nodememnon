const fs = require('fs');

const book = {
    title: 'A Mate',
    author: "Ryan P P"
}

var buch = JSON.stringify(book);

//fs.writeFileSync('1-json.json', buch);

//var buchBuffer = fs.readFileSync('1-json.json');

//console.log(buchBuffer.toString());


var jsonStr = fs.readFileSync('1-json.json').toString();

var jsonObj = JSON.parse(jsonStr);
jsonObj.name = "Ryan";
jsonObj.age = 69;

jsonStr = JSON.stringify(jsonObj);

fs.writeFileSync('1-json.json', jsonStr);