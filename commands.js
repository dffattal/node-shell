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

exports.echo = function(file, done) {
    var output = ""
    for (var i = 0; i < file.length; i++) {
      output += file[i] + ' '
    }
    done(output.slice(0, output.length - 1))
}

exports.cat = function(file, done) {
    var output = ""
    fs.readFile(file[0], function(err, data) {
        if (err) throw err
        output += data
        done(output)
    })
}

exports.head = function(file, done) {
    var output = ""
    fs.readFile(file[0], function(err, data) {
        if (err) throw err
        // output += data
        var lineCutoff = 0
        var endOfFile = false
        for(var i = 0; i < data.length; i++) {
          // console.log("char at " + i + " is: " + data[i])
          if (lineCutoff >= 10) {
            output += data.slice(0, i)
            endOfFile = true
            break;
          }
          if (data[i] === 10) {
            // console.log('in if')
            lineCutoff++
          }
        }
        if (!endOfFile) {
          output += data
        }
        done(output.slice(0, output.length - 1))
    })
}

exports.tail = function(file, done) {
    var output = ""
    fs.readFile(file[0], function(err, data) {
        if (err) throw err
        // output += data
        var lineCutoff = 0
        var endOfFile = false
        for(var i = data.length - 1; i > 0; i--) {
          // console.log("char at " + i + " is: " + data[i])
          if (lineCutoff >= 5) {
            output += data.slice(i + 1)
            endOfFile = true
            break;
          }
          if (data[i] === 10) {
            // console.log('in if')
            lineCutoff++
          }
        }
        if (!endOfFile) {
          output += data
        }
        done(output.slice(1))
    })
}

exports.wc = function(file, done) {
  var output = 1
  fs.readFile(file[0], function(err, data) {
    if (err) throw err
    for (var i = 0; i < data.length; i++) {
      if (data[i] === 10) {
        output++
      }
    }
    done(output + '')
  })
}
