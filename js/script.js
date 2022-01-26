"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(43, 31));
console.log(calc(456, 3));
console.log(calc(43, 371));


function ret() {
    let num = 40;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);
//Функция в переменной используется только после того как была объявленной в отличии от предыдущей
const logger = function() {
    console.log('Hrllo');
};

logger();

//Стрелочная функция

const chak = (a, b) => {
    console.log('1');
    return a + b;
};