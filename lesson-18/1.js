/* Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.

-   В качестве структуры данных использовать `Map`.
-   Метод `create`:
-   -   принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
-   -   возвращает `id`
-   -   при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
-   Метод `read`:
-   -   принимает идентификатор пользователь
-   -   если такого пользователя нет возвращать `null`
-   -   если есть — возвращать объект пользователя с полем `id` внутри объекта.
-   -   если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
-   Метод `readAll`:
-   -   возвращает массив пользователей
-   -   генерировать ошибку если в метод `readAll` передан параметр
-   Метод `update`:
-   -   обновляет пользователя
-   -   принимает 2 обязательных параметра
-   -   генерирует ошибку если передан несуществующий `id`
-   -   генерирует ошибку если передан `id` с типом не строка
-   -   генерирует ошибку если второй параметр не валидный
-   Метод `delete`:
-   -   удаляет пользователя
-   -   Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`

*/
class DB{
    constructor(){
        this.map = new Map();
    }
    create = function(object) {
        let id = null;
        if(!object.hasOwnProperty('name') || !object.hasOwnProperty('age') || !object.hasOwnProperty('country') || !object.hasOwnProperty('salary'))
        {
            throw new Error('Еhe object does not have one of the required fields.')
            
        }else if(typeof object.name !== 'string' || typeof object.age !== 'number' || typeof object.country !== 'string' || typeof object.salary !== 'number'){
            throw new Error('One of the required fields does not match the data type assigned to it.')
        }
        while(true){
            id = `f${(~~(Math.random()*1e8)).toString(16)}`;
            if(this.map.has(id)){
                continue;
            }else{
                this.map.set(id, object);
                break;
            }
        }
        return id;
    }
    read = function(id) {
        if(typeof id !== 'string'){
            throw new Error('User id must be a string.');
        }
        if(this.map.has(id)){
            const user = this.map.get(id);
            user.id = id;
            return user;
        }else{
            return null;
        }
    }
    readAll = function() {
        if(arguments.length > 0){
            throw new Error('Function readAll should not have parameters.');
        }
        return Array.from(this.map.values());
    }
    update = function(id, obj) {
        if(arguments.length !== 2){
            throw new Error('The function update must have 2 parameters.');
        }
        if(typeof id !== 'string'){
            throw new Error('User id must be a string.');
        }
        if(!this.map.has(id)){
            throw new Error('Can\'t find user with id: ' + id + '.');
        }
        if(!this.isValid(obj)){
            throw new Error('Second parameter of function update is not valid.');
        }
        const currentValue = this.map.get(id);
        for(var key in obj){
            currentValue[key] = obj[key];
        }
        this.map.set(id, currentValue);
        
        
    }
    delete = function(id) {
        if(typeof id !== 'string'){
            throw new Error('User id must be a string.');
        }
        if(!this.map.has(id)){
            throw new Error('Can\'t find user with id: ' + id + '.');
        }
        this.map.delete(id);
    }
    isValid = function(object){
        for(var key in object){
            if(key !== 'name' && key !== 'age' && key !== 'country' && key !== 'salary'){
                return false;
            }
        }
        return true;
    }
}
const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей
db.update(id, { age: 22 }); // id
db.delete(id); // true


