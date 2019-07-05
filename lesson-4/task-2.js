/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 * Свойство `rate` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * Свойство `salary` можно читать, но нельзя менять.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 * Если rate не установлен — возвращаем число 0.
 */
const person = {};

// Решение
Object.defineProperties(person, {
    'rate': {
        writable: true,
        configurable: false,
        enumerable: false
    },
    'salary':{
        enumerable: true,
        get() {
            return typeof this.rate === 'undefined' ? 0 : this.rate *  new Date().getDay();
        }
    }
});

console.log(person.salary);

person.rate = 30;

console.log(person.salary);

console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person))
// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
person.salary;

exports.person = person;
