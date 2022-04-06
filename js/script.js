'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

/* const a = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько оцените его?', ''),
  c = prompt('Один из последних просмотренных фильмов?', ''),
  d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = [b];
personalMovieDB.movies[c] = [d]; */

/* for (let i = 0; i < 2; i++) {
  let a, b;

  a = prompt('Один из последних просмотренных фильмов?', '');
  b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    console.log('Error');
  }
}
 */
// two method
let l = 0;
while (l < 2) {
  let a, b;

  a = prompt('Один из последних просмотренных фильмов?', '');
  b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    console.log('Error');
  }

  l++;
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else {
  console.log('Вы киноман');
}
