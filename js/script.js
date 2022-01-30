"use strict";

const arr = [1, 2, 3, 6, 8];

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// // console.log(arr.length); // Кол-во элементов массива

// //arr.pop(); //удаляет последний элемент массива
// arr.push(10); //добавляет элемент в конец массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {       //еще один вариант
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
console.log(products.join('; '));