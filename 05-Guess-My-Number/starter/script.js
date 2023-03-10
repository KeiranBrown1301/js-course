'use strict';

// What the DOM actually be?
// Document object model.
// Structured representation of HTML documents. Allows JS to access HTML elements and styles to manipulate them. Simply put: Change text, HTML attributes and even CSS styles.

// Special object that is the entry point to the DOM is DOCUMENT -> document.querySelector()

// DOM methods and properties for DOM manipulation IS NOT part of JS. It's part of the WEB apis and CAN INTERACT with JS. More of these web apis, can be for example FETCH or TIMERS, etc.

console.log(document.querySelector('.message').textContent);
