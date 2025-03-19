"use strict";

const maxInt = prompt("Enter a positive integer to sum numbers up to: ");
let sum = 0;

for (let i = 0; i <= maxInt; i++) {
  sum += i;
}

const p = (document.createElement(
  "p"
).innerHTML = `The sum of all numbers up to ${maxInt} is ${sum}`);
document.body.innerHTML = p;
