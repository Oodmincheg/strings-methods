/* global process */

const readline = require("readline")
const fs = require('fs');
var exec = require('child_process').exec;
let name;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Please enter your github name: ", async function(nameFromInput) {
    const dir = `./${nameFromInput}`;
    if (!fs.existsSync(dir)){
        exec(`git checkout -D ${nameFromInput}-string-methods`, (err) => {console.log(err); if(err) throw err })
        exec(`git checkout -b ${nameFromInput}-string-methods`, (err) => {console.log(err); if(err) throw err })
        fs.mkdirSync(dir);
        fs.copyFile('./concat.example.js', `${nameFromInput}/concat.js`, (error) => {if(error) throw error} )
        const fd = fs.openSync('./name.js', 'w')
        fs.writeFile(fd, `module.exports = '${nameFromInput}'`, 'utf8', function(){})
    } else {
        console.log(`You already have the folder: ${nameFromInput}. Please checkout to your branch: ${nameFromInput}-string-methods or delete your folder and run npm start again.`)
    }
    rl.close()

})

rl.on("close", function() {
    process.exit(0)
})

module.exports =  name

