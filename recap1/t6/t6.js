"use strict";

const multiMax = prompt("Enter maximum integer for a multiplication table: ");

const table = document.createElement("table");

for (let i = 1; i <= multiMax; i++) {
  const tr = table.insertRow();
  for (let j = 1; j <= multiMax; j++) {
    const td = tr.insertCell();
    td.appendChild(document.createTextNode(i * j));
    td.style.border = "1px solid black";
  }
}

document.body.appendChild(table);
