// spread

// const user = {
//     name: 'Alex',
//     age: 18,
//     car: {
//         model: 'BMW',
//         color: 'Black'
//     },
// };
//
// const user2 = {
//   surname: 'green',
// };
//
// const admin = {
//     ...user,
//     car: {
//         ...user.car,
//         color: 'white',
//     }
// };
//
// console.log(user);
// console.log(admin);

// const cars = ['nissan', 'bmw', 'porshe'];
// const favourite = ['food', 'code', cars[0], cars[1], cars[2]];

// cars.forEach((car) => {
//    favourite.push(car);
// });

// const favourite = ['food', 'code', ...cars];
//
// console.log(favourite);

// rest

function printUser(params) {
    console.log(params.name, params.age);
}

const user = {
    name: 'Alex',
    age: 18,
    hasCar: true
};

printUser(user);