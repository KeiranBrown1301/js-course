// Strict mode
"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
// const if = 22;

//  FUNCTIONS
// function logger() {
//   console.log("My name is Keiran");
// }
// Calling / Running / Invoking the function./
// logger();

// function fruitJuicer(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitJuicer(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitJuicer(3, 2);
// console.log(appleOrangeJuice);

// FUNCTION DECLARATION VS EXPRESSIONS
// Essentialy this boils down to personal prefernce, but function expressions can provide for easier to read code, that we can have at the top of the file.
// Function declatartion
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }
// const age1 = calcAge1(1991);

// Function expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// ARROW FUNCTIONS
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// Arrow Functions
// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetrirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
// return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// yearsUntilRetrirement(1991)
// console.log(yearsUntilRetrirement(1991, "Keiran"));
// console.log(yearsUntilRetrirement(1980, "Paul"));

// What kind of function should I write?
// Answer - It depends!

// FUNCTIONS CALLING OTHER FUNCTIONS
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitJuicer(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   return juice;
// }

// console.log(fruitJuicer(2, 3));

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearsUntilRetrirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} will retire in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetrirement(1991, "Keiran"));
// console.log(yearsUntilRetrirement(1950, "John"));

// CODING CHALLENGE
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
const dolphinsAverageScore = calcAverage(44, 23, 71);
const koalasAverageScore = calcAverage(65, 54, 49);
// Test 2
// const dolphinsAverageScore = calcAverage(85, 54, 41);
// const koalasAverageScore = calcAverage(23, 34, 27);

console.log(dolphinsAverageScore, koalasAverageScore);

const checkWinner = function(avgDolphins, avgKoalas) {
  if () {

  } else if() {

  } else {
    return `No one is the winner`
  }
};
