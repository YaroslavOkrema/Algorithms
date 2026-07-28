//Напиши функцію findFirstIndex(numbers, target), яка повертає індекс першого входження числа target у масиві. Якщо такого числа немає, поверни -1.
// findFirstIndex([4, 7, 2, 7], 7); // 1
// findFirstIndex([3, 5, 8], 8); // 2
// findFirstIndex([3, 5, 8], 10); // -1
// findFirstIndex([], 5); // -1

function findFirstIndex(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(findFirstIndex([4, 7, 2, 7], 8));