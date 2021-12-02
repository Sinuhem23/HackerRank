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
  // For loop to iterate through array starting with q.length-1
  for (var i = q.length - 1; i >= 0; i--) {
    // if current index does not equal q.length
    if (q[i] != i + 1) {
      // if q.length -2 is bigger or equal to 0 and current index -1 is equal to q.length
      if (i - 1 >= 0 && q[i - 1] == i + 1) {
        // storing current index -1 in temp constant then swapping it with current index
        const temp = q[i - 1];
        q[i - 1] = q[i];
        q[i] = temp;
        // adding 1 to total swaps
        swaps += 1;
      }
      // else if q.length - 3 is bigger or equal to 0 and curent index - 2 equals to q.length
      else if (i - 2 >= 0 && q[i - 2] == i + 1) {
        // storing current index -2 in temp constant then swapping it with current index -1 and swap current index -1 with current index then current index is swapped with temp
        const temp = q[i - 2];
        q[i - 2] = q[i - 1];
        q[i - 1] = q[i];
        q[i] = temp;
        // adding 2 to total swaps
        swaps += 2;
      }
      // Set else to console.log to "Too Chaotic" since it is 3+ swaps
      else {
        console.log('Too chaotic');
        return;
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
