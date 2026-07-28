// Напиши функцію countGreaterThan(numbers, target), яка повертає кількість чисел у масиві, більших за target.

function countGreaterThan(numbers, target) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > target) {
            count++;
        }
    }

    return count;
}

console.log(countGreaterThan([2, 8, 4, 10], 5));