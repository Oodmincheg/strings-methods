/* global process */

const readline = require("readline")
const fs = require('fs');
var exec = require('child_process').exec;
let name;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const errorCb = (err) => {
    if(err) throw err
}
rl.question("Please enter your github name: ", function(nameFromInput) {
    const dir = `./${nameFromInput}`;
    if(fs.existsSync(dir)) {
        console.log('Your already have a dir. Please checkout to your branch and finish task or delete the folder and start again.')
        rl.close()
    }

    exec(`git br -D ${nameFromInput}-string-methods`, errorCb)
    exec(`git checkout -b ${nameFromInput}-string-methods`, errorCb)
    fs.mkdirSync(dir);
    const fd = fs.openSync('./name.js', 'w')
    fs.writeFile(fd, `module.exports = '${nameFromInput}'`, 'utf8', function(){})
    fs.copyFile('./concat.example.js', `${nameFromInput}/concat.js`, errorCb )
    rl.close()

})

rl.on("close", function() {
    process.exit(0)
})

module.exports =  name

