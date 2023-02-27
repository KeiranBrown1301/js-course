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
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
// const dolphinsAverageScore = calcAverage(44, 23, 71);
// const koalasAverageScore = calcAverage(65, 54, 49);
// Test 2
// const dolphinsAverageScore = calcAverage(85, 54, 41);
// const koalasAverageScore = calcAverage(23, 34, 27);

// console.log(dolphinsAverageScore, koalasAverageScore);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return `No one is the winner`;
//   }
// };

// const whoWon = checkWinner(dolphinsAverageScore, koalasAverageScore);
// console.log(whoWon);

// INTRODUCTION TO ARRAYS
// const friend1 = "Tim";
// const friend2 = "John";
// const friend3 = "Jack";

// const friends = ["Jack", "Tim", "John"];
// console.log(friends);

// const years = new Array(1991, 1992, 1993, 1994);
// Musch more common to use the above, literal syntax

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[1] = "Fred";
// console.log(friends);

// const firstName = "Keiran";
// const keiran = [firstName, "Brown", 2023 - 1991, "teacher", friends];
// console.log(keiran);

// Exercise
// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };
// const years = [1991, 1967, 2002, 2020, 1923];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// BASIC ARRAY OPERATORS
// const friends = ["Jack", "Tim", "John"];
// End of an array
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// Start of an array
// friends.unshift("Meg");
// console.log(friends);

// Remove elements -
// const popped = friends.pop(); //Returns the popped value // Pops end
// console.log(friends);
// console.log(popped);

// friends.shift(); // Removes first
// console.log(friends);

// console.log(friends.indexOf("John")); // Returns the location in array
// console.log(friends.indexOf("Steven")); // Returns -1 if doesnt exist
// console.log(friends.includes("John")); //Shows true or false

// if (friends.includes("John")) {
//   console.log(`You have a friend named John`);
// }

// CODING CHALLENGE - 2

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// // Test for above function
// const testTip = calcTip(100);
// console.log(testTip);

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// INTRO TO OBJECTS
const keiranArray = [
  "Keiran",
  "Brown",
  2023 - 1991,
  "teacher",
  ["Iz", "Luke", "James"],
];

const keiranObject = {
  firstName: "Keiran",
  lastName: "Brown",
  age: 2023 - 1991,
  job: "teacher",
  friends: ["Jack", "Luke", "Iz"],
};
