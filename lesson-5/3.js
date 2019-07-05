/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
function truncate(string, maxLength){
    if(typeof string !== 'string'){
        throw new Error('First parameter must be a string!')
    }
    if(typeof maxLength !== 'number'){
        throw new Error('Second parameter must be a number!')
    }
    if(string.length < 3 || maxLength < 3){
        throw new Error('Parameters must be greater than 3!')
    }
    return string.length > maxLength ? string.slice(0, maxLength-3) + '...' : string;
}
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21));
truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'

exports.truncate = truncate;
