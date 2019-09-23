/*# Задача 2

Улучшите класс `Customers` добавив функцию генератор.

**Обратите внимание**:

1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.
*/

class Customers{
    constructor(){
        this.arr = [];
    }
    add(obj){
        if (Object.keys(obj).indexOf('name') === -1){
            throw new Error('The name field is required for the add function.')
        }
        this.arr.push(obj);
    }
    *[Symbol.iterator](){
        for(const item of this.arr){
            if(item.verified === true)
                yield item;
        }
    }
}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
//{ name: 'Andrii', verified: true }
//{ name: 'Marco', verified: true }
//{ name: 'Lisa', verified: true }
//{ name: 'Ivan', verified: true }
