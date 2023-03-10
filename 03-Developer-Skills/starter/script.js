// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = birthYear => 2023 - birthYear;
// console.log(calcAge(1990));

// Solving problems as a developer.

// Example - In an array of GPS coordinates, find the two closest points.
// Stay calm and slow down.
// Take a logical and rational approach.

// 4 steps.
// 1 - Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.
// 2 - Divide and conquer: Break a big problem into smaller sub problems.
// 3 - Dont be afraid to do as much research as we have to. (Google, Stack overflow, MDN.)
// 4 - For bigger problems, write pusedo code before writing the actual code.
//

// Ral example
//
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1 - Understanding the probelem
// - What is temp amplitude? A: The difference between highest and lowest temp.
// - How to compute the max and mix temp?
// - Whats a sensor error? What to do when it occurs.

// 2 - Breaking this issue into sub problems?
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and reutrn it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; ++i) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);
// max = 3, then in the next iteration from the for loop it asks 'is 7 > max?' and so on an so forth, this is the same for the min values.
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PRoblem 2:
// The function should recieve two arrays of temperatures.

// Understand the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge the two arrays.

// Sub problems
// Merge two arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; ++i) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 9, 1], [9, 0, 5]);
console.log(amplitudeNew);
