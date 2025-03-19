"use strict";

const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "pear",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "ugli",
  "vanilla",
  "watermelon",
  "ximenia",
  "yellow passion fruit",
  "zucchini",
];

console.log(fruits);
console.log(`Length of array: ${fruits.length}`);
console.log(`Index 2 of array: ${fruits[2]}`);
console.log(`Last element of fruits: ${fruits[fruits.length - 1]}`);

const vegetables = [];

for (let i = 0; i < 3; i++) {
  const input = prompt("Enter a vegetable: ");
  vegetables.push(input);
}

console.log(vegetables);
console.log(`Length of vegetables array: ${vegetables.length}`);
