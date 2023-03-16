'use strict';

// What the DOM actually be?
// Document object model.
// Structured representation of HTML documents. Allows JS to access HTML elements and styles to manipulate them. Simply put: Change text, HTML attributes and even CSS styles.

// Special object that is the entry point to the DOM is DOCUMENT -> document.querySelector()

// DOM methods and properties for DOM manipulation IS NOT part of JS. It's part of the WEB apis and CAN INTERACT with JS. More of these web apis, can be for example FETCH or TIMERS, etc.

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 25;

// document.querySelector('.guess').value = 0;
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number ⛔️';
  }
});
