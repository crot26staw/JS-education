"use strict";

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Передаёт не саму структуру а ссылку на объект

// copy.a = 10;

// console.log(copy);

function copy(mainObj) {
    let objCopy = {};
    
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 3,
    c: {
        x: 5,
        y: 7
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));  // соединяет объекты

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();   //копируем массив

newArray[1] = 'sfdghjryhj';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],        //еще 1 способ
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);      


function log(a, b, c) {  //еще 1 способ
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];
const newAAray = [...array];  //Так тоже копирует


const q = {
    one: 1,           //И так тоже можно
    two: 2
};

const newQ = {...q};