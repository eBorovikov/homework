/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

function checkSpam(source, example){
    if(typeof source === 'string' && typeof example === 'string'){
        return source.toLowerCase().includes(example.toLowerCase()) ? true : false;
    }
    else{
        throw new Error('Parameter must be a string!');
    }
}
console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));
console.log(checkSpam('pitterxxx@gmail.com', 'XXX'));

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
