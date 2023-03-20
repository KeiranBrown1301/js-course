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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input.
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No Number!');

    // When player win.
  } else if (guess === secretNumber) {
    displayMessage('Correct Guess! Nice!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector('.highscore').textContent = highScore;

    // When gues is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Your guess is too high!'
          : 'Your guess is too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose.');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
