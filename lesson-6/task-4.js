/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение
function some(arr, foo){
    if(arguments.length !== 2){
        throw new Error('При вызове функции не было передано два аргумента');
    }
    if(Array.isArray(arr) !== true){
        throw new Error('В качестве первого аргумента был передан не массив');
    }
    if(typeof foo !== 'function'){
        throw new Error('В качестве второго аргумента была передана не функция');
    }
    for(var i = 0; i < arr.length; i++){
        if(foo(arr[i], i, arr)){
            return true;
        }
    }
    return false;
}
const result = some(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'string';
});

console.log(result); // true

exports.some = some;
