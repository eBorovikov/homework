/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
function upperCaseFirst(string){
    if(typeof string==='string'){
        return string.length > 0 ? string[0].toUpperCase()+string.slice(1) : '';
    }
    else{
        throw new Error('Parameter must be a string!');
    }
}
console.log(upperCaseFirst('pitter'));
console.log(upperCaseFirst(''));

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;
