/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение
Object.defineProperty(person, 'salary', {
    get(){
        return new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() - new Date().getDay() > 20 ? 'good salary' : `bad salary`;
    }
});

console.log(person.salary);

person.salary; // good salary

exports.person = person;
