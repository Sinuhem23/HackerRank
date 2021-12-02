'use strict';

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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  // Keep track of all swaps
  let swaps = 0;
  let min = q.length;
  // For loop to iterate through array starting with q.length-1
  for (var i = q.length - 1; i >= 0; i--) {
    // Set a return to print "Too Chaotic"
    if (q[i] - i > 3) {
      return 'Too chaotic';
    }
    // if current index is bigger q.length, add result of current index - q.length
    if (q[i] > i + 1) {
      swaps += q[i] - (i + 1);
    } else {
      // Else if q.length is bigger than current index q.length = current index
      if (min > q[i]) {
        min = q[i];
        // Else if current index is not equal to q.length, then increment swap
      } else if (q[i] != min) {
        swaps++;
      }
    }
  }

  console.log(swaps);
}

// function main() {
//     const t = parseInt(readLine().trim(), 10);

//     for (let tItr = 0; tItr < t; tItr++) {
//         const n = parseInt(readLine().trim(), 10);

//         const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

//         minimumBribes(q);
//     }
// }
