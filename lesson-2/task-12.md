# Задача 12

Найдите сумму положительных элементов массива.

Использовать встроенные методы массивов — нельзя.

```javascript
const array = [2, -1, -3, 15, 0, 4];
```

#Решение:

```javascript
const array = [2, -1, -3, 15, 0, 4];
var sum = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] > 0){
        sum += array[i];
    }
}
console.log(sum);
```