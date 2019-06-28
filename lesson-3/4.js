/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение
function f(num){
    if(typeof num !== 'number'){
        throw new Error('parameter type is not a Number');
    }
    else if(1 <= num && num <= 7){
        var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
        return days[num-1];
    }
    else{
        throw new Error('parameter should be in the range of 1 to 7');
    }
}
console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('1'));
/* не удалять */
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

export { f };
/* не удалять */