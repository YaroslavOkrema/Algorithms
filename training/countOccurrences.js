//Напиши функцію countOccurrences(numbers, target), яка повертає кількість входжень числа target у масиві.
// countOccurrences([4, 7, 2, 7], 7); // 2
// countOccurrences([5, 5, 5], 5); // 3

function countOccurrences(numbers, target) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            count++;
        }
    }

    return count;
}

console.log(countOccurrences([4, 7, 2, 7], 7));