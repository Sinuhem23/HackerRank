'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  // Write your code here

  let currLevel = 0;
  let valleys = 0;

  for (let i = 0; i < path.length; i++) {
    //update the current level
    if (path[i] === 'U') {
      currLevel += 1;
      if (currLevel == 0) {
        valleys += 1;
      }
    } else {
      currLevel -= 1;
    }
  }

  return valleys;
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const steps = parseInt(readLine().trim(), 10);

//     const path = readLine();

//     const result = countingValleys(steps, path);

//     ws.write(result + '\n');

//     ws.end();
// }
