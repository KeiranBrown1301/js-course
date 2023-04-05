'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating new variable with same name as outher scopes variable.

      // Reasigning outer scopes variable
      output = 'NEW OUTPUT!';

      const firstName = 'John';
      const str = `Oh, and youre a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // Block scoped;
    console.log(millenial); // Function scoped;
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Keiran';
calcAge(1991);
// console.log(age);
// printAge()
