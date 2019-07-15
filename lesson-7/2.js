/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента,
 * и возвращать число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 * 
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

function collect(arr){
    if(!Array.isArray(arguments[0])){
        throw new Error('В качестве первого аргумента функции был передан не массив!');
    }
    if(arguments.length !== 1){
        throw new Error('При вызове функции не был передан один аргумент!');
    }
    
    var sum = 0;
    function arrSum(arr){
        arr.forEach(function(a){
            if(!(typeof a === 'number' || Array.isArray(a))){
                throw new Error('на каком-то уровне было найдено значение отличное от числа или массива');
            }
            return Array.isArray(a) ? arrSum(a) : sum += a;
        });
        return sum;
    }
    return arrSum(arr);
}

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

//const array6 = [[[[['a', 1], 3]]]];
//console.log(collect(array6)); // ошибка

exports.collect = collect;
