const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

read.on('line', (input) => {
  console.log(`Your name is: ${input}`);
});
read.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
