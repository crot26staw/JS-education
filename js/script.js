"use strict";

// В строку 
// 1ый вариант

console.log(typeof(String(null)));
console.log(typeof(String(55)));

// 2ой вариант конкотенация
console.log(typeof(55 + 'fgh')); //при сложении со строкой всегда получается строка

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';
console.log(fontSize);

// В число
// 1ый способ
console.log(typeof(Number('55')));

// 2ой способ
console.log(typeof(+'5'));

// 3ИЙ
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// В булиновое значение
// 0, '', null, undefiend, NaN; - это всё изначально является false
// 1ый способ
let switcher = null;
if (switcher) {
    console.log('Hello');
}

switcher = 1;
if (switcher) {
    console.log('Hello');
}

// 2ой способ

console.log(typeof(Boolean('55')));

// 3ий

console.log(typeof(!!"333"));