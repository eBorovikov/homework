/**
 * Задача 1.
 *
 * Создайте функцию createNumberGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет генерировать и возвращать случайное число от 1 до 100.
 *
 * Условия:
 * - Числа не должны повторяться;
 * - Задачу нужно решить с помощью замыкания.
 *
 * Генерировать ошибку если:
 * - Функция была вызвана, когда доступные для выведения числа закончились.
 *
 * Подсказка: в замыкании можно хранить массив с числами, которые уже были созданы функцией.
 */

// Решение

function createNumberGenerator(){
    let arr = [];
    let max = 100;
    let min = 1;//[1,100]

    function func(){
        if(arr.length > 99)
        {
            throw new Error('Function was called when available to derive numbers ended.')
        }
        while(true){
        let number = Math.floor(Math.random() * (max + 1 - min)) + min;
            if(arr.indexOf(number) === -1){
                arr.push(number)
                return number;
            }
        }

    }
    return () => func();
}
const TOTAL_ITERATIONS = 101;
let invocations = 0;
const generateNumber = createNumberGenerator();

try {
    for (let iteration = 0/*я подправил тут 1 на 0, т.к. иначе коммент снизу не выполнится*/; iteration < TOTAL_ITERATIONS; iteration++) {
        console.log(`Iteration: ${iteration}. Number: ${generateNumber()}`);
        invocations += 1;
    }
} catch(error) {
    console.log('Error caught.');
    console.log(
        `Function generated an error after ${invocations} invocations.`,
    );
}

// Когда все числа выведутся:
// Error caught.
// Function generated an error after 99 invocations.

exports.createNumberGenerator = createNumberGenerator;
