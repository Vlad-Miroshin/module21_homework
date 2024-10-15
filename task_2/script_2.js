// Задание 2
// Напишите функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

function hasOwnProp(propName,  obj) {
    return Object.hasOwn(obj, propName);
}

// на всякий случай функция, определяющая наличие свойства
// по всей цепочке прототипов

function hasProp(propName,  obj) {
    return propName in obj;
}

// проверка

function Customer() {
    this.uuid = 'f227c5f-de3e-4cc7-b561-32a49a25b210',
    this.familyName = 'Петров',
    this.surname = 'Сергей',
    this.patronymic = 'Павлович',
    this.discount = 5,
    this.category = 'Private',
    this.birthDay = '1983-05-11'
}

const customer = new Customer();

console.log('Object customer');
Object.getOwnPropertyNames(customer).forEach(
    (key) => console.log(`${key} : ${customer[key]}`)
);

// добавим свойство прототипу
Customer.prototype.abc = "abc";

console.log('');
console.log(`hasOwnProp('familyName', customer) === ${hasOwnProp('familyName', customer)}`);
console.log(`hasOwnProp('abcdef', customer) === ${hasOwnProp('abcdef', customer)}`);

// первая функция не видит добавленное прототипу свойство
console.log(`hasOwnProp('abc', customer) === ${hasOwnProp('abc', customer)}`);
// а вторая видит
console.log(`hasProp('abc', customer) === ${hasProp('abc', customer)}`);

console.log(`hasProp('zzz', customer) === ${hasProp('zzz', customer)}`);