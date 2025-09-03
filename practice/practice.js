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

const post = {
    title: 'My post',
    likesQty: 5
}

JSON.stringify(post);

const postStringify = JSON.stringify(post);
JSON.parse(postStringify);