'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//   inputString = inputString.split('\n');

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
  // Write your code here
  //  Math.trunc returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x.
  let fracNumber = Math.trunc(n / s.length);
  let reminder = n % s.length;
  let counter = 0;

  for (let index = 0; index < s.length; index++) {
    if (s[index] === 'a') {
      counter++;
    }
  }
  counter = counter * fracNumber;
  for (let index = 0; index < reminder; index++) {
    if (s[index] === 'a') {
      counter++;
    }
  }
  return counter;
}

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const s = readLine();

//   const n = parseInt(readLine().trim(), 10);

//   const result = repeatedString(s, n);

//   ws.write(result + '\n');

//   ws.end();
// }
