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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Write your code here
  arr.sort(function (a, b) {
    return a - b;
  });
  const numMap = {};
  var maxNum = 0;
  var maxChar = 0;
  for (var num of arr) {
    if (numMap[num]) {
      numMap[num]++;
    } else {
      numMap[num] = 1;
    }
  }
  for (var num in numMap) {
    if (numMap[num] > maxNum) {
      maxNum = numMap[num];
      maxChar = num;
    }
  }
  return maxChar;
}

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const arrCount = parseInt(readLine().trim(), 10);

//   const arr = readLine()
//     .replace(/\s+$/g, '')
//     .split(' ')
//     .map((arrTemp) => parseInt(arrTemp, 10));

//   const result = migratoryBirds(arr);

//   ws.write(result + '\n');

//   ws.end();
// }
