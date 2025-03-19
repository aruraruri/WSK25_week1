"use strict";

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

console.log(highestRatedMovie);
