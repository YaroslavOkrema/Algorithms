//Напиши функцію countInRange(numbers, min, max), яка повертає кількість чисел у масиві, що знаходяться в діапазоні від min до max включно.

function countInRange(numbers, min, max) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= min && numbers[i] <= max) {
            count++;
        }
    }

    return count;
}

console.log(countInRange([1, 5, 8, 10], 5, 8));