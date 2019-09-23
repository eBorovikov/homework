/*
# Задача 1

Создайте класс `Customers` который умеет работать с механизмом `for of`.

Класс `Customers` содержит метод `add` который принимает объект в качестве параметра. У этого объекта есть обязательное поле `name` и необязательное поле `verified`.

Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.

**Обратите внимание**:

1. Использование генераторов **запрещено**.
2. Использование посторонних библиотек **запрещено**
3. У класса `Customers` **должен** быть метод `Symbol.iterator`

Пример использования:
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
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                let value;
                let done;
                do{
                    done = i >= this.arr.length;
                    if(!done && Object.keys(this.arr[i]).indexOf('verified') !==-1){
                        if(this.arr[i].verified === true){
                            value = this.arr[i];
                            i++;
                            break;
                        }
                        else{
                            value = undefined;
                        }
                    }
                    i++;
                }
                while(!done)
                
                return {
                    done,
                    value
                };
            }
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


