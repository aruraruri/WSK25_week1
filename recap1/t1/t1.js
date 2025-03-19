"use strict";

const tempC = prompt("Enter a temperature in Celsius: ");

const celsiusToFahrenheit = (tempC) => {
  return (tempC * 9) / 5 + 32;
};

const celsiusToKelvin = (tempC) => {
  return parseFloat(tempC) + 273.15;
};

document.querySelector(
  "#target"
).innerHTML = `The temperature in Fahrenheit is: ${celsiusToFahrenheit(
  tempC
)} The temperature in Kelvin is: ${celsiusToKelvin(tempC)}`;
