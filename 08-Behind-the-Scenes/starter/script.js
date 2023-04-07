'use strict';

// function calcAge2(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating new variable with same name as outher scopes variable.

//       // Reasigning outer scopes variable
//       output = 'NEW OUTPUT!';

//       const firstName = 'John';
//       const str = `Oh, and youre a millenial, ${firstName}.`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str); // Block scoped;
//     console.log(millenial); // Function scoped;
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Keiran';
// calcAge2(1991);
// console.log(age);
// printAge()

//  Hoisting and TDZ practice
// Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Keiran';
// let job = 'Teacher';
// const year = 1991;

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAgeArrow(1991);

// const keiran = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// keiran.calcAge();

// const megumi = {
//   year: 1995,
// };

// megumi.calcAge = keiran.calcAge;
// megumi.calcAge();

// const f = keiran.calcAge;
// f();

// var firstName = 'Megumi';

const keiran = {
  firstName: 'Keiran',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1991);
    //   // console.log(this.year >= 1981 && this.year <= 1991);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1991);
    };
    isMillenial();
  },
  // Arrow functions do not get a this keyword
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
  // greet: () => console.log(`Hey ${keiran.firstName}`),
};
keiran.greet();
keiran.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 16);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Keiran',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);
