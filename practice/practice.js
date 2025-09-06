const numbers = [1, 5, 12, 18, 3, 7, 25];

let multiplyByTwo = numbers.map(num => num * 2);

let biggerThanTen = numbers.filter(num => num > 10)

let sum = numbers.reduce((acc, number) => acc + number, 0);

let firstGreaterThan15 = numbers.find(num => num > 15);

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 15 }
];

const names = users.map(user => user.name);

const overEighteen = users.filter(user => user.age > 18);

const avgAge = users.reduce((acc, num) => acc + num.age, 0) / users.length;


const products = [
    { name: "Apple", price: 50, category: "fruit" },
    { name: "Banana", price: 30, category: "fruit" },
    { name: "Carrot", price: 20, category: "vegetable" },
    { name: "Steak", price: 200, category: "meat" },
    { name: "Salmon", price: 150, category: "fish" }
];

const namesFruits = products.filter(product => product.category === "fruit").map(product => product.name);

const sumProducts = products.reduce((acc, product) => acc + product.price, 0);

const low100 = products.filter(product => product.price < 100).map(product => product.name);

const productBigger100 = products.find(product => product.price > 100);

// console.log(namesFruits);

const objA = {
    a: 10,
    b: true,
}

const copyOfA = objA;

copyOfA.a = 20;
copyOfA.c = 'abc';

// console.log(objA);

// function a() {
//     console.log('Hello');
// }
//
// a = 10;
//
// a();

// const b = () => {
//     console.log('Hello');
// }
//
// b();
//
// b = 10;
//
// b();

// const myCity = {
//     city: 'New York',
// }
//
// myCity.popular = true;
//
// myCity.country = 'Ukraine';
//
// // console.log(myCity);
//
// const myCity2 = {
//     city: 'New York',
//     popular: true,
//     country: 'Ukraine',
// }
//
// delete myCity2.popular;
// console.log(myCity2);

// const myCity = {
//     city: 'Dnipro',
// }
//
// myCity['popular'] = true;
//
// console.log(myCity);
//
// const countryPropertyName = 'country';
//
// myCity[countryPropertyName] = 'Ukraine';
//
// console.log(myCity);

// const myCity = {
//     city: 'Dnipro',
//     info: {
//         isPopular: true,
//         country: 'Ukraine',
//     }
// }
//
// console.log(myCity.info.isPopular);
//
// delete myCity.info['isPopular'];
//
// console.log(myCity);

// const myCity = {
//     city: 'Dnipro',
//     cityGreeting: function () {
//         console.log('Hello');
//     }
// }
//
// myCity.cityGreeting();

// const post = {
//     title: 'My post',
//     likesQty: 5
// }
//
// JSON.stringify(post);
//
// const postStringify = JSON.stringify(post);
// JSON.parse(postStringify);

// const person = {
//     name: "Alice",
//     age: 25,
// }
//
// const person2 = person;
//
// person2.age = 26;
// person2.isAdult = true;
//
// console.log(person.age);
// console.log(person.isAdult);

// const person = {
//     name: "Alice",
//     age: 25,
// }
//
// const person2 = Object.assign({}, person);
// person2.age = 26;
//
// console.log(person);
// console.log(person2);

// const person = {
//     name: "Alice",
//     age: 25,
// }
//
// const person2 = {...person}
// person2.name = "Bob";

// const person = {
//     name: "Alice",
//     age: 25,
// }
//
// const person2 = JSON.parse(JSON.stringify(person));
// person2.name = "Bob";
//
// console.log(person);
// console.log(person2)

// const user = { name: "Alex", age: 25, city: "Kyiv" };
//
// console.log(Object.keys(user).length);
//
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
//
// console.log(Object.values(salaries).reduce((a, b) => a + b, 0));
//
//
//
// function voidObject(obj) {
//     return Object.keys(obj).length === 0;
// }
//
// console.log(voidObject({}));
//
// const user2 = { name: "Masha", age: 20 };
//
// function hasAge(obj) {
//     return Object.keys(obj).includes('age');
// }
//
// console.log(hasAge(user2));

// const product = { title: "Phone", price: 1000, color: "black" };
//
// function getValues(obj) {
//     return Object.values(obj);
// }
//
// console.log(getValues(product));

// const car = { brand: "BMW" };
//
// function addYear(obj) {
//     obj.year = 2020;
//     return obj;
// }
//
// console.log(addYear(car))

// const person = { name: "Oleg", age: 30 };
//
// function removeAge(obj) {
//     delete obj.age;
//     return obj;
// }
//
// console.log(removeAge(person));

const user = { name: "Ira", city: "Kyiv" };

function hasKyiv(obj) {
    return Object.values(obj).includes('Kyiv');
}

console.log(hasKyiv(user));