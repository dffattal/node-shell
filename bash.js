// console.log(process)
// console.log(Object.keys(process))

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === 'pwd') {
    process.stdout.write(process.cwd() + '\n')
  }

  if (cmd === 'date') {
    var currentDate = new Date()
    process.stdout.write(currentDate.toString() + '\n')
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});

//

// console.log(process.argv)

// function pwd() {
//   var fileLocation = this.argv[1]
//   console.log(fileLocation)
// }

// this.pwd = function() {

// }

// console.log(process.cwd())

// process.pwd = function() {
//   return process.cwd()
// }
