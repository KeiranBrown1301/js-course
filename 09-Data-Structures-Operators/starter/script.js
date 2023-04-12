'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },

    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
      starterIndex = 1,
      mainIndex = 0,
      time = '20:00',
      address,
    }) {
      console.log(
        `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      );
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const restaurant1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const restaurant2 = {
  name: 'Borsa',
  owner: 'Keiran Brown',
};

// OR Assignment operator
// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;

// restaurant1.numGuests ||= 10;
// restaurant2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

// restaurant1.owner = restaurant1.owner && '<ANONYMOUS>';
// restaurant2.owner = restaurant2.owner && '<ANONYMOUS>';

restaurant1.owner &&= '< ANONYMOUS >';
restaurant2.owner &&= '< ANONYMOUS >';

console.log(restaurant1);
console.log(restaurant2);

// NULLISH coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // SHORT CIRCUITING
// // OR OPERATOR = Great way to set default values
// // Returns the first truthy or last element
// // can use any data type, return any data type, short circuiting
// console.log('--------OR-----------');
// console.log(2 || 'Keiran');
// console.log('' || 'Keiran');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // AND OPERATOR
// console.log('-----------AND------------');
// console.log(0 && 'Keiran');
// console.log(7 && 'Keiran');
// console.log('Hello' && 23 && null && 'Keiran');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'pineapple');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // REST PATTERN
// // Destructuring
// // Spread because on the right side of the =
// const arr = [1, 2, ...[3, 4]];
// // REST because on the LEFT of the =
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(a, b, other);
// // REST always has to be the last element. Can only be 1 REST in any assignment.
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 3, 4, 5, 6, 9);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushroom', 'pineapple', 'onions');
// restaurant.orderPizza('Mushrooms');
// END OF REST PATTERN

// SPREAD OPERATOR
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: Arrays, strings, maps, sets. NOT objects.
// const str = 'Keiran';
// const letters = [...str, ' ', 'B.'];
// console.log(letters);
// console.log(...str);
// console.log('K', 'e');
// // console.log(`${...str} Brown`);

// // Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaraunt = {
//   foundingYear: 1991,
//   ...restaurant,
//   founder: 'Keiran Brown',
// };
// console.log(newRestaraunt);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// END OF SPREAD OPERATOR

// DESTRUCTURING OBJECTS
// restaurant.orderDelivery({
//   time: '22.30',
//   address: '3 Grange Road Caulfield East',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '3 Grange Road Caulfield East',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// END OF DESTRUCTURING ARRAYS

// DESTRUCTURING ARRAYS //

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// END OF DESTRUCURING ARRAYS ///
