// ////////////////////////////////////
// // Linking a JavaScript File
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// ////////////////////////////////////
// // Values and Variables
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// ////////////////////////////////////
// // Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);
// //
////////////////////////////////////
// let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = 'programmer';
// job = 'teacher'

// lastName = 'Schmedtmann';
// console.log(lastName);
////////////////////////////////////
// Basic Operators

// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

////////////////////////////////////
// CODING CHALLENGE
// const weightMark = 95;
// const heightMark = 1.88;

// const weightJohn = 85;
// const heightJohn = 1.76;

// const weightMark = 78;
// const heightMark = 1.69;

// const weightJohn = 92;
// const heightJohn = 1.95;

// const markBMI = weightMark / (heightMark * heightMark);
// const johnBMI = weightJohn / (heightJohn * heightJohn);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);
// /////////////////////////////////////////

// STRINGS and TEMPLATE LITERALS
// const firstName = "Keiran";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2023;

// const keiran =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
// console.log(keiran);

// const keiranNew = `I'm ${firstName} a ${year - birthYear} year old ${job}.`;
// console.log(keiranNew);

// console.log(`This is just a normal string...`);

// console.log(`String with \n\
//  many \n\
//  lines`);

// console.log(`This string doesn't
//  need
//  any linebreak characters`);

// /////////////////////
// Taking decisions: if and else statements

// const age = 20;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(`Sarah can get her drivers lisence no worries`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Sarah is too young, she has to wait another ${yearsLeft} years!`
//   );
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// CODING CHALLENGE 2
// const weightMark = 95;
// const heightMark = 1.88;

// const weightJohn = 85;
// const heightJohn = 1.76;

// const weightMark = 78;
// const heightMark = 1.69;

// const weightJohn = 92;
// const heightJohn = 1.95;

// const markBMI = weightMark / (heightMark * heightMark);
// const johnBMI = weightJohn / (heightJohn * heightJohn);

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higer than Mark's BMI (${markBMI})`);
// }

// TYPE CONVERSION
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Keiran"));
// console.log(typeof NaN);

// console.log(String(32), 32);

// TYPE COESCION
// console.log("I am " + 32 + " years old.");
// console.log("23" - "10" - 3);
// console.log("23" * "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// TRUTHY FALSY
//  FALSY - 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Keiran"));
// console.log(Boolean(""));
// console.log(Boolean({}));

// const money = 10;
// if (money) {
//   console.log("Dont spent it all!");
// } else {
//   console.log("You should get a job.");
// }

// let height = 180;
// if (height) {
//   console.log("Yay height is defined");
// } else {
//   console.log("Geight is UNDEFINED");
// }

// Equality operators
// const age = 18;
// if (age === 18) console.log("You just became an adult! (strict)");
// if (age == 18) console.log("You just became an adult! (loose)");
//  === is a strict equality operator - No type coercion
//  == loose operator - Returns type coercion. NOTE: Generally avoided.
// Default the triple operator.

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is mine too!");
// } else if (favourite === 7) {
//   console.log("7 is also a pretty cool number");
// } else {
//   console.log("That isnt 23 or 7... Damn");
// }

// if (favourite !== 23) console.log("Why not 23?");
//  !== - Strict
//  != - Loose

// Boolean Operators
// And, Or or Not
//  Not operator = !A
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense); // NOT

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log(`Sarash is able to drive`);
// } else {
//   console.log(`Someone else can drive.`);
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && !isTired); // OR

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`Sarash is able to drive.`);
// } else {
//   console.log(`Someone else should drive...`);
// }

//  CODING CHALLENGE 3
// Dolphins win
// const dolphinsAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110) / 3;

// Koalas win
// const dolphinsAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (99 + 150 + 110) / 3;

// Draw
// const dolphinsAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (96 + 108 + 89) / 3;

// console.log(dolphinsAverageScore);
// console.log(koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore) {
//   console.log("The Dolphins are the winners!");
// } else if (dolphinsAverageScore === koalasAverageScore) {
//   console.log(`It's a draw!`);
// } else {
//   console.log(`The Koalas are the winners!`);
// }

// Bonus 1
// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 123) / 3;

//  Bonus 2
const dolphinsAverageScore = (97 + 112 + 101) / 3;
const koalasAverageScore = (109 + 95 + 106) / 3;

console.log(dolphinsAverageScore);
console.log(koalasAverageScore);

const minimumScore = 100;

if (
  dolphinsAverageScore > koalasAverageScore &&
  dolphinsAverageScore >= minimumScore
) {
  console.log(`The Dolphins are the winners!`);
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore >= minimumScore
) {
  console.log(`The Koalas are the winners!`);
} else if (
  (koalasAverageScore < minimumScore && dolphinsAverageScore < minimumScore) ||
  koalasAverageScore === dolphinsAverageScore
) {
  console.log(`It's a draw`);
}
