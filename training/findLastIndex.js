// Напиши функцію findLastIndex(numbers, target), яка повертає індекс останнього входження target. Якщо число не знайдено, поверни -1.
// findLastIndex([4, 7, 2, 7], 7); // 3
// findLastIndex([5, 2, 3], 5); // 0
// findLastIndex([1, 2, 3], 8); // -1
// findLastIndex([], 4); // -1

function findLastIndex(numbers, target) {
    let lastIndex = -1;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            lastIndex = i
        }
    }

    return lastIndex;
}

console.log(findLastIndex([4, 7, 2, 7], 7));