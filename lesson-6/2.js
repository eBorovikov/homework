/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

function filter(arr, foo){
    if(arguments.length !== 2){
        throw new Error('При вызове функции не было передано два аргумента');
    }
    if(Array.isArray(arr) !== true){
        throw new Error('В качестве первого аргумента был передан не массив');
    }
    if(typeof foo !== 'function'){
        throw new Error('В качестве второго аргумента была передана не функция');
    }
    var result = new Array();
    for(var i = 0; i < arr.length; i++){
        if(foo(arr[i], i, arr)){
            result.push(arr[i]);
        }
    }
    return result;
}


const filteredArray = filter(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;

