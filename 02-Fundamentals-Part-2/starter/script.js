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
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Functions
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
