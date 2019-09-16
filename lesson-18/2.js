/*Улучшить класс `DB` из предыдущей задачи.

-   Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
-   Генерировать ошибку, если query не валидный
-   Поля `name` и `country` ищут 100% совпадение
-   Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
-   Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса
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
    isValidQuery = function(object){
        if(Object.keys(object).length === 0){
            return false;
        }
        for(var key in object){
            if(key !== 'name' && key !== 'age' && key !== 'country' && key !== 'salary'){
                return false;
            }
            if( key === 'age' || key === 'salary' ){
                if(Object.keys(object[key]).length === 0){
                    return false;
                }
                for(var keyInKey in object[key]){
                    if(keyInKey !== 'min' && keyInKey !== 'max'){
                        return false;
                    }
                }
            }
        }
        return true;
    }
    find = function(object){
        if(!this.isValidQuery(object)){
            throw new Error('Invalid query.');
        }
        const arr = new Array();
        this.map.forEach((value, key, ownMap) => {
            let doesItMatch = true;
            for(var key in object){
                if(key ==='name' || key === 'country'){
                    if(object[key] !== value[key]){
                        doesItMatch = false;
                    }
                }else if(key ==='age' || key === 'salary'){
                    if(object[key].hasOwnProperty('min')){
                        if(value[key] < object[key].min){
                            doesItMatch = false;
                        }
                    }
                    if(object[key].hasOwnProperty('max')){
                        if(value[key] > object[key].max){
                            doesItMatch = false;
                        }
                    }                 
                }
            }
            if(doesItMatch){
                arr.push(value);
            }
        });
        return arr;
    }
}

const db = new DB();



const id = db.create({
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
});
db.create({
    name: 'Bulbash', // обязательное поле с типом string
    age: 40, // обязательное поле с типом number
    country: 'by', // обязательное поле с типом string
    salary: 1200 // обязательное поле с типом number
});
db.create({
    name: 'Jon', // обязательное поле с типом string
    age: 14, // обязательное поле с типом number
    country: 'en', // обязательное поле с типом string
    salary: 10 // обязательное поле с типом number
});
db.create({
    name: 'Sara', // обязательное поле с типом string
    age: 18, // обязательное поле с типом number
    country: 'en', // обязательное поле с типом string
    salary: 200 // обязательное поле с типом number
});



const query = {
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 6000
    }
};

const customers = db.find(query); // массив пользователей

console.log(customers);