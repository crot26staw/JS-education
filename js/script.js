"use strict";

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();
// callback фунуция которая запускается последовательно
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошёл этот урок!');
}

learnJS('JavaScript', done);
