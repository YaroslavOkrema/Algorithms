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

// Напишіть функцію для розділення рядка і перетворення його в масив слів.
//"Robin Singh" ==> ["Robin", "Singh"]
//"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
    return string.split(' ');
}

console.log(stringToArray("I love arrays they are my favorite"));

//Допишіть функцію квадратної суми так, щоб вона підносила до квадрату кожне передане їй число, а потім підсумовувала результати.
function squareSum(arr){
    let square = arr.map(function(numbers){
        return numbers * numbers;
    });

    return square.reduce(function(accum, value) {
        return accum + value;
    });
}

console.log(squareSum([0, 3, 4, 5])); // 50

//Напишіть функцію, яка отримує два аргументи і повертає всі числа, які діляться на заданий дільник.
// Перший аргумент - масив чисел, другий - дільник.
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
function divisibleBy(arr, divisor){
    return arr.filter(function (value) {
        if (value % divisor === 0) {
            return arr;
        }
    })
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

function divisibleBy2(arr, divisor){
   const newArr = [];

   for (let i = 0; i < arr.length; i++) {
       if (arr[i] % divisor === 0) {
           newArr.push(arr[i]);
       }
   }

   return newArr;
}

console.log(divisibleBy2([1, 2, 3, 4, 5, 6], 2));

// You need to get the sum of two arrays... Or rather, the sum of all their elements.
//
// P.S. Each array contains only integers. The input data are also numbers.

function arrayPlusArray(arr1, arr2) {
    let sumArr1 = arr1.reduce(function(accum, value) {
        return accum + value;
    });

    let sumArr2 = arr2.reduce(function(accum, value) {
        return accum + value;
    });

    return sumArr1 + sumArr2;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21

// Напишіть функцію sumArrays, яка приймає два масиви однакової довжини та повертає новий масив,
// в якому кожен елемент є сумою відповідних елементів обох вхідних масивів.
function sumArrays(arr1, arr2) {
    const arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i] + arr2[i]);
    }

    return arr3;
}

console.log(sumArrays([1, 2, 3], [4, 5, 6])); // [5, 7, 9]

//Напишіть функцію, яка видаляє дублікати з масиву невід'ємних чисел і повертає його як результат.
//
// Порядок послідовності повинен залишатись незмінним.
// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(arr) {
    const newArr = [...new Set(arr)];
    return newArr;
}

console.log(distinct([1, 2, 1, 1, 3, 2]));

// За заданим набором чисел поверніть обернену до них адитивну величину.
// Всі додатні числа стають від'ємними, а від'ємні - додатними.
// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
function invert(arr) {
    let invertArr = [];

    for (let i = 0; i < arr.length; i++) {
        invertArr.push(-arr[i]);
    }

    return invertArr;
}

console.log(invert([1, -2, 3, -4, 5]));

function invert2(arr) {
    return arr.map(function (value) {
       return value * -1;
    });
}

console.log(invert2([1, -2, 3, -4, 5]));

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function count(number) {
    const arr = [];

    for (let i = 1; i <= number; i++) {
        arr.push(i);
    }

    return arr;
}


console.log(count(5));

function fillArr(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(fillArr([0, 1, false, 2, undefined, '', 3, null]));

// -----------------------------------------------------------------------
//input [1, 2, 3, 4, 5], [6, 7, 8, 9, 10]
//output [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumArr(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }

    return newArr;
}

function sumArr2(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(sumArr([1, 2, 3, 4, 5], [6, 7, 8, 9 , 10]));
console.log(sumArr2([1, 2, 3, 4, 5], [6, 7, 8, 9 , 10]));

//-----------------------------------------------------------------------------------------
// Zero to end arr
function zeroToEnd(arr) {
    let zeroArr = [];
    let numbersArr = [];
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr.push(arr[i]);
        } else {
            numbersArr.push(arr[i]);
        }
    }

    for (let i = 0; i < numbersArr.length; i++) {
        resultArr.push(numbersArr[i]);
    }

    for (let i = 0; i < zeroArr.length; i++) {
        resultArr.push(zeroArr[i]);
    }

    return resultArr;
}

function zeroToEnd2(arr) {
    let zeroArr = [];
    let numbersArr = [];

    arr.forEach((element) => {
        if (element === 0) {
            zeroArr.push(element);
        } else {
            numbersArr.push(element);
        }
    });

    return [...numbersArr, ...zeroArr];
}

console.log(zeroToEnd([1, 0, 2, 0, 4, 0, 0, 0, 0, 10, 3, 0]));
console.log(zeroToEnd2([1, 0, 2, 0, 4, 0, 0, 0, 0, 10, 3, 0]));


// ------------------------------------------------------------------
// Напишіть функцію, яка приймає рядок і повертає найдовше слово.
function longestWord(str) {
    const words = str.split(' ');
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(longestWord('The quick brown fox jumps over the lazy dog'));

function shortWordInRow(str) {
    const words = str.split(' ');
    let shortWord = words[0];

    for (let i = 0; i < words.length; i++) {
        if (shortWord.length > words[i].length) {
            shortWord = words[i];
        }
    }

    return shortWord;
}

console.log(shortWordInRow('The quick brown fox jumps over the lazy as dog'));

// Anagram

function isAnagram(str1, str2) {
    const firstStr = str1.toLowerCase().split('').sort().join('');
    const secondStr = str2.toLowerCase().split('').sort().join('');

    return firstStr === secondStr;
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));  // false


// Напиши функцію uniqueValues(arr), яка приймає масив і повертає новий масив з унікальними значеннями.
function uniqueValues(arr) {
    return [...new Set(arr)];
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5]));

function uniqueValues2(arr) {
    return arr.filter(function(value, index) {
        return arr.indexOf(value) === index;
    })
}

console.log(uniqueValues2([1, 2, 2, 3, 4, 4, 5]));

//Напиши функцію findMax(arr), яка повертає найбільше число у масиві.
function findMax(arr) {
    let maxNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        if (maxNumber < arr[i]) {
            maxNumber = arr[i]
        }
    }

    return maxNumber;
}

console.log(findMax([1, 2, 3, 4, 5, 20, 30, 12, 13, 23]));

function findMax2(arr) {
    return Math.max(...arr)
}

console.log(findMax2([1, 2, 3, 4, 5, 20, 30, 12, 13, 23]));

//Напишіть функцію, яка об'єднує два масиви та прибирає дублікати.
function mergeUniqueArrays(arr1, arr2) {
    const firstArr = [...new Set(arr1)];
    const secondArr = [...new Set(arr2)];

    return [...firstArr, ...secondArr];
}

console.log(mergeUniqueArrays([1,1,1,2,2,3,3,4,5], [6,6,7,7,8,9]))