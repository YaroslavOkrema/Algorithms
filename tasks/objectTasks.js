//1. Виведи всі ключі та значення об'єкта у форматі:
// <key>: <value>.

const settings = {
    theme: 'dark',
    language: 'en',
    notification: 'true'
}

//console.log(Object.entries(settings));

//2. Створи новий об'єкт newPerson, скопіювавши всі властивості з person, і додай нову властивість city зі значенням "Kyiv".

const person = {
    name: 'John',
    age: 8,
}

const newPerson = {...person, city: 'Kyiv'};
//console.log(Object.assign(newPerson));


//3. Створи об'єкт animal із властивостями type та name. Перевір, чи є в об'єкті властивість age. Якщо немає, додай її зі значенням 5.

const animal = {
    name: 'John',
    type: 'dog',
}

if (!animal.hasOwnProperty('age')) {
    animal.age = 5;
}
// console.log(animal);

//4. Дано об'єкт car з властивостями brand та model. Додай до об'єкта властивість year зі значенням 2020. Виведи оновлений об'єкт.

const car = {
    brand: 'BMW',
    model: 'M8',
}

car.year = 2020;
// console.log(car);


//5. Видали властивість currency з об'єкта та виведи результат.

const product = {
    name: "Laptop",
    price: 1500,
    currency: "USD",
    isAvailable: true
};

delete product.currency;
// console.log(product);


//6. Створи об'єкт student із кількома властивостями: ім'я, вік, клас, середній бал. Напиши код, який підраховує кількість властивостей у цьому об'єкті.

const student = {
    name: 'John',
    age: 8,
    avgScore: 10
}

// console.log(Object.keys(student).length);

//7. Змініть значення властивості isAvailable на true і виведіть оновлений об'єкт.

const book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    isAvailable: false
};

book.isAvailable = true;
// console.log(book);

//8. Виведи імена всіх користувачів через кому.

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// const names = users.map((user) => user.name);

// console.log(names.join(', '));


//9. Напиши код, який знайде об'єкт із назвою "Laptop" та виведе його.

const products = [
    { id: 1, name: "Phone", price: 500 },
    { id: 2, name: "Laptop", price: 1500 },
    { id: 3, name: "Tablet", price: 700 }
];

const laptop = products.find(product => product.name === 'Laptop');
console.log(laptop);