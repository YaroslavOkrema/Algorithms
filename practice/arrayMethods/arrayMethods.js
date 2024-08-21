const people = [
    { name: 'Владилен', age: 25, budget: 40000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 },
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

for (let person of people) {
    console.log(person);
}


// forEach
people.forEach(function (person) {
    console.log(person);
});

// Map
const newPeople = people.map(person => {
   return `${person.name} (${person.age})`;
});
console.log(newPeople);


// Filter
/*const adults = [];
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
        adults.push(people[i]);
    }
}
console.log(adults);*/

const adults = people.filter(person => {
   if (person.age >= 18) {
       return true;
   }
});
console.log(adults);

// Reduce
/*let amount = 0;
for (let i = 0; i < people.length; i++) {
    amount += people[i].budget;
}
console.log(amount);*/

const amount = people.reduce(function (total, person) {
    return total + person.budget;
}, 0);
console.log(amount);

let arr = ["Есть", "жизнь", "на", "Марсе"];

/*let arrLength = [];
for (let i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
}*/

const arrLength = arr.map(function (arr) {
    return arr.length;
})

console.log(arrLength); // 4,5,2,5


// Дан массив целых чисел. Создай новый массив, где каждый элемент будет возведён в квадрат.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function (numbers) {
    return numbers * numbers;
});
console.log(squaredNumbers);

// Дан массив строк. Нужно создать новый массив, содержащий только строки, длина которых больше 3 символов.
const words = ["cat", "elephant", "dog", "mouse"];
const longWords = words.filter(function (words) {
    if (words.length > 3) {
        return true;
    }
});
console.log(longWords);

// Дан массив чисел. Найди произведение всех чисел в массиве
const numbers1 = [2, 3, 4, 5];
const product = numbers1.reduce(function (total, currentValue) {
    return total * currentValue;
});
console.log(product);