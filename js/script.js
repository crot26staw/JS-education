"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],  //Массив
    private: false
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних фильмов', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

//     personalMovieDB.movies[a] = b;      
// }

// ПЕРВЫЙ МОЙ ВАРИАНТ

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних фильмов', ''),
//           b = prompt('На сколько оцените его?', '');
//     i++;

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     } 
       
// }

// ВТОРОЙ МОЙ ВАРИАНТ

let i = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    i++;
      
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
 
        personalMovieDB.movies[a] = b;
        console.log('done'); 
    } else {
    console.log('error');
    i--;
    }
}
while (i < 2);

if (personalMovieDB.count < 10) {
    console.log('Просмотренно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы класический киноман');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('ПРоизошла ошибка');
}

console.log(personalMovieDB);

