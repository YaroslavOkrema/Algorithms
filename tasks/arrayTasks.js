//Напишіть функцію, яка отримує на вхід масив чисел і повертає їх суму.
//Числа можуть бути від'ємними або нецілими. Якщо масив не містить жодного числа, то слід повернути 0.
function sum (arr) {
    if (arr.length === 0) return 0;

    return arr.reduce(function (accum, value) {
        return accum + value;
    });
}

console.log(sum ([1, 5.2, 4, 0, -1]));

//Напишіть функцію, яка обчислює середнє арифметичне чисел у заданому списку.
//Порожні масиви повинні повертати 0.
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce(function (accum, value) {
        return accum + value;
    })

    return sum / arr.length;
}

console.log(findAverage([1, 2, 3, 4]));

function findAverage2(arr) {
    let sum = 0;
    const length = arr.length;

    if (arr.length === 0) return 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / length;
}

console.log(findAverage2([1, 2, 3, 4]));

//За заданим непорожнім масивом цілих чисел повернути результат перемноження значень по порядку. Приклад:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(arr){
    return arr.reduce(function (accum, value) {
        return accum * value;
    }, 1);
}

console.log(grow([1, 2, 3, 4]));

function grow2(arr){
    let grow = 1;
    for (let i = 0; i < arr.length; i++) {
        grow *= arr[i];
    }

    return grow;
}

console.log(grow2([1, 2, 3, 4]));

//За заданим масивом цілих чисел у вигляді рядків та чисел виведіть суму значень масиву,
// як якщо б усі вони були числами. Відповідь виведіть у вигляді числа.
function sumMix(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    return sum;
}

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

function sumMix2(arr) {
    return arr.reduce(function (accum, value) {
        return accum + parseInt(value);
    }, 0)
}

console.log(sumMix2(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

// reverse array input [1,2,3,4,5] output [5,4,3,2,1]
function reverseArray(arr) {
    let reverseArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArray2(arr) {
    return arr.reverse();
}

console.log(reverseArray2([1, 2, 3, 4, 5]));

// palindrom
// return true if palindrom
// return false if not palindrom
function isPalindrom(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrom('level'));

function isPalindrom2(str) {
    let reverseStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    return reverseStr === str;
}

console.log(isPalindrom2('level'));

//За заданим масивом цілих чисел повернути новий масив, у якому кожне значення подвоюється.
//
// Наприклад:
//
// [1, 2, 3] --> [2, 4, 6]

function maps(arr){
    return arr.map(function (num) {
        return num * 2;
    });
}

console.log(maps([1, 2, 3]));

function maps2(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

console.log(maps2([1, 2, 3]));
