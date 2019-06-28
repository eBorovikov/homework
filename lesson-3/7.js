/**
 * Задача 7.
 *
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Входной параметр должен быть больше 0.
 */

// Решение
function getDivisors(num){
    if(typeof num !== 'number'){
        throw new Error('parameter type is not a Number');
    }
    else if( num <= 0 ){
        throw new Error('parameter can\'t be a ' + num);
    }
    else{
        let arr = new Array();
        for(var i = 1; i <= num; i++){
            if(num % i === 0){
                arr.push(i); 
            }
        }
        return arr;
    }
}

console.log(getDivisors(12));
console.log(getDivisors('Content'));
console.log(getDivisors(0));

/* не удалять */
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

//export { getDivisors };
/* не удалять */
