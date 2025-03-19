const score = prompt("Enter your score:");
document.body.innerText = [0, 1, 2, 3, 4, 5][
  [39, 51, 63, 75, 87, 100].findIndex((limit) => score <= limit)
];
