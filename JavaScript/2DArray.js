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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
  // Write your code here

  // Since max is -9*7
  let max = -63;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = arr[i + 1][j + 1];
      for (let k = 0; k < 3; k++) {
        sum += arr[i][j + k];
        sum += arr[i + 2][j + k];
      }
      if (sum > max) max = sum;
    }
  }

  return max;
}

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   let arr = Array(6);

//   for (let i = 0; i < 6; i++) {
//     arr[i] = readLine()
//       .replace(/\s+$/g, '')
//       .split(' ')
//       .map((arrTemp) => parseInt(arrTemp, 10));
//   }

//   const result = hourglassSum(arr);

//   ws.write(result + '\n');

//   ws.end();
// }
