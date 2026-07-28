//Напиши функцію sumInRange(numbers, min, max), яка повертає суму чисел, що входять у діапазон від min до max включно.

function sumInRange(numbers, min, max) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= min && numbers[i] <= max) {
            sum += numbers[i];
        }
    }

    return sum;
}

console.log(sumInRange([1, 5, 8, 10], 5, 8));