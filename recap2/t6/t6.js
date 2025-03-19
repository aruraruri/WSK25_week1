"use strict";

const moviesUl = document.querySelector("#movies");
const highestRatedMovieP = document.querySelector("#highest");

function Movie(title, rating) {
  this.title = title;
  this.rating = rating;
}

const movies = [];

while (true) {
  let movieTitle = prompt("Enter a movie title (cancel/esc to quit):");
  if (movieTitle === null) {
    break;
  }
  let movieRating = parseInt(prompt("Enter its rating (cancel/esc to quit):"));
  if (movieRating === null) {
    break;
  }

  movies.push(new Movie(movieTitle, movieRating));
  let list = document.createElement("li");
  list.textContent = `${movieTitle}, rating: ${movieRating} stars.`;
  moviesUl.appendChild(list);
}

console.log(movies);

let highestRatedMovie = movies.reduce(
  (acc, movie) => {
    console.log("Current acc:", acc, "Current movie:", movie);
    if (movie.rating > acc.rating) {
      return movie;
    } else {
      return acc;
    }
  },
  { rating: -Infinity }
);

highestRatedMovieP.textContent = `The highest rated movie is: ${highestRatedMovie.title}, with a rating of ${highestRatedMovie.rating} stars.`;
console.log(highestRatedMovie);
