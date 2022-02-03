"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    generes: [],  //Массив
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы класический киноман');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('ПРоизошла ошибка');
        }
    },  
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    whiteYouGeners: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre != null && genre != '') {
                personalMovieDB.generes[i - 1] = genre;
            } else {
                console.log('Вы ввели некорректные даныне');
                i--;
            }
        }
        personalMovieDB.generes.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleeVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    },
};    
