"use strict";
console.log("This is text is printed to the console.");

const numbers = [];

document.body.innerHTML = "<h1>Even Numbers</h1>";

while (true) {
  const input = prompt("Enter a number (or cancel to stop): ");
  if (input === null) {
    alert("Program finished!");
    break;
  } else {
    numbers.push(parseInt(input));
  }
}

for (const number of numbers) {
  if (number % 2 === 0) {
    const paragraph = document.createElement("p");
    paragraph.textContent = number;
    document.body.appendChild(paragraph);
  }
}
