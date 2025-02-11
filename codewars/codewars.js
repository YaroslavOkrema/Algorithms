//8 kyu tasks

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
//
// For example, a multiplication table (string) for number == 5 looks like below:
//
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

function multiTable(number) {
    let table = '';

    for (let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number}\n`;
    }

    return table;
}

// console.log(multiTable(5));


////////////////////////////////////////////////////////////////

// Знайти суму всіх чисел, кратних n, але менших за m
// Майте на увазі
// n та m - натуральні числа (натуральні натуральні числа)
// m виключено з кратних чисел
// Приклади:
// sumMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7) ==> «INVALID»

function sumMul(n,m){
    let sum = 0;

    if (m <= n) return 'INVALID';

    for (let i = n; i < m; i++) {
        if (i % n === 0) {
            sum += i;
        }
    }

    return sum;
}

// console.log(sumMul(2, 9));

///////////////////////////////////////////////////////////////////////
//Напиши стрілкову функцію, яка приймає масив чисел та перетворює його у рядок, використовуючи ASCII-коди.
//arrowFunc([72, 101, 108, 108, 111]) // "Hello"

const arrowFunction = (arr) => {
    return arr.map(num => String.fromCharCode(num)).join('');
}

const arrowFunc = (arr) => {
    let str = '';

    for (let i = 0; i < arr.length; i++) {
        str += String.fromCharCode(arr[i]);
    }

    return str;
}

// console.log(arrowFunction([70,85,83,32,82,79,72,32,68,65,72]));
// console.log(arrowFunc([70,85,83,32,82,79,72,32,68,65,72]));

///////////////////////////////////////////////////////////////////////////////////
//Дано два масиви чисел a і b (довжина ≥ 1). Потрібно перевірити, чи сума квадратів елементів a строго більша за суму кубів елементів b.
function arrayMadness(a, b) {
    let arrA = a.map(numbers => numbers * numbers);
    let arrB = b.map(numbers => numbers * numbers * numbers);

    let sumArrA = arrA.reduce(function(value, acum) {
        return value + acum;
    })

    let sumArrB = arrB.reduce(function(value, acum) {
        return value + acum;
    })

    if (sumArrA > sumArrB) {
        return true;
    } else {
        return false;
    }
}

function arrMadness2(a, b) {
    let arrOne = a.reduce((sum, number) => sum + Math.pow(number, 2), 0);
    let arrTwo = b.reduce((sum, number) => sum + Math.pow(number, 3), 0);

    return arrOne > arrTwo;
}

console.log(arrayMadness([5,6,7],[4,5,6]));
console.log(arrMadness2([5,6,7],[4,5,6]));
