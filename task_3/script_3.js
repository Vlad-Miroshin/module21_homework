// Задание 3
// Напишите функцию, которая создает пустой объект, но без прототипа.

function createEmptyObject() {
    return Object.create(null);
}

// проверка

const obj = createEmptyObject();

console.log(obj);

console.log('');
console.log(`Object.getPrototypeOf(obj) === ${Object.getPrototypeOf(obj)}`);
