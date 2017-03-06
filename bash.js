// import
var commands = require("./commands");
var done = function(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmdArr = data.toString().trim().split(' '); // remove the newline
  var cmd = cmdArr[0]
  var file = cmdArr.slice(1);
  if(commands[cmd]){
    commands[cmd](file, done);
  }
  else{
    commands.notValid(file, done);
  }

});



// console.log(`Starting directory: ${process.cwd()}`);
// try {
//   process.chdir('/tmp');
//   console.log(`New directory: ${process.cwd()}`);
// }
// catch (err) {
//   console.log(`chdir: ${err}`);
// }
// var date = new Date();
// console.log(date);
