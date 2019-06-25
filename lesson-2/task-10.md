# Задача 10. Условие:

Отсортируйте массив по возрастанию.

Использовать встроенные методы массивов — нельзя.

```javascript
const arr = [6, 5, 4, 3, 2, 1];
// [1,2,3,4,5,6]
```

# Решение:

```javascript
const arr = [6, 5, 4, 3, 2, 1];

for(let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr);
```