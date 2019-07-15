/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
function createArray(value, lenght){
    if(!Array.isArray(value) && (typeof value !== 'number') && (typeof value !== 'string') && (typeof value !== 'object')){
        throw new Error('В качестве первого аргумента были переданы не число, не строка, не объект и не массив');
    }
    if(arguments.length !== 2){
        throw new Error('При вызове функции не был передано два аргумента!');
    }
    if(typeof lenght !== 'number'){
        throw new Error('В качестве второго аргумента был передан не число');
    }
    var newArray = new Array(lenght);
    return newArray.fill(value);
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
