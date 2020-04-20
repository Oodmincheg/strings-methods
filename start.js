/* global process */

const readline = require("readline")
const fs = require('fs');
var exec = require('child_process').exec;
let name;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Please enter your github name: ", function(nameFromInput) {
    exec(`git checkout -b ${nameFromInput}-string-methods`, (err) => {if(err) throw err})
    const dir = `./${nameFromInput}`;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    const fd = fs.openSync('./name.js', 'w')
    fs.writeFile(fd, `module.exports = '${nameFromInput}'`, 'utf8', function(){})
    fs.copyFile('./concat.example.js', `${nameFromInput}/concat.js`, (error) => {if(error) throw error} )
    rl.close()

})

rl.on("close", function() {
    process.exit(0)
})

module.exports =  name

