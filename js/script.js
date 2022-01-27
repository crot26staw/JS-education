"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],  //Массив
    private: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних фильмов', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }     
    }
} 

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы класический киноман');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('ПРоизошла ошибка');
    }
} 

detectPersonalLevel();


//МОЙ ВАРИАНТ РЕШЕНИЯ
// function showMyDB() {
//     if (personalMovieDB.private == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('НЕверно!');
//     }
// }

// showMyDB();

// let firstGeners;
// let secondGeners;
// let thirdGeners;

// function whiteYouGenres() {
//     firstGeners = prompt('Какой ваш любимый жанр по номером 1?', '');
//     secondGeners = prompt('Какой ваш любимый жанр по номером 2?', '');
//     thirdGeners = prompt('Какой ваш любимый жанр по номером 3?', '');

//     personalMovieDB.generes[0] = firstGeners;
//     personalMovieDB.generes[1] = secondGeners;
//     personalMovieDB.generes[2] = thirdGeners;

// }

// whiteYouGenres();

//ВАРИАНТ ИЗ КУРСА

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

function whiteYouGeners() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.generes[i - 1] = genre;
    }
}
whiteYouGeners();