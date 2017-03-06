// Imports
var fs = require('fs');

// Exports
var exports = module.exports = {};

exports.pwd = function(file, done){
    // pwd code
    var output = process.cwd();
    done(output);
}

exports.date = function(file, done){
    var date = new Date();
    var output = date.toString();
    done(output);
}

exports.ls = function(file, done){
    var output = "";
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        process.stdout.write('\n');
        files.forEach(function(file) {
            output += file.toString() + "\n";
        })
        done(output);
    });
}

exports.notValid = function(file, done){
    var output = "NOT A VALID COMMAND";
    done(output);
}

