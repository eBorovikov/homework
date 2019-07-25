/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * которая вернёт ещё одну функцию, !шта?:)!
 * каждый вызов которой будет возвращать число из последовательности Фибоначчи. !шта?:)!
 *
 * Условия:
 * - Числа не должны повторяться; !шта?:)!
 * - Задачу нужно решить с помощью замыкания.
 *
 * Генерировать ошибку если:
 * - Функция была вызвана, когда доступные для выведения числа закончились !шта?:)!.
 */

// Решение

function createFibonacciGenerator(){
    let a = 0;
    let b = 1;
    const obj = {
        print : function(){
            let result = a + b;
            a = b;
            b = result;
            return  a;
        },
        reset : function(){
            a = 0;
            b = 1;
        }
    }
    return obj;
}

const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2

exports.createFibonacciGenerator = createFibonacciGenerator;
