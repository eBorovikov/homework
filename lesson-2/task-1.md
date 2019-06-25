# Задача 1. Условие:

Перепишите код, заменив оператор `if` на тернарный оператор `?`

```js
const a = 2;
const b = 1;
let result = null;

if (a + b < 4) {
    result = true;
} else {
    result = false;
}

console.log(result);
```

# Решение:

```js
const a = 2;
const b = 1;
let result = null;

result = (a + b < 4) ? true : false;

console.log(result);
```

