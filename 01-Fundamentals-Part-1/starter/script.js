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
const inputYear = "1991";
console.log(Number(inputYear));
console.log(inputYear + 18);

// TYPE COESCION
