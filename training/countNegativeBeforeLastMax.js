//Напиши функцію countNegativeBeforeLastMax(numbers), яка повертає кількість від’ємних чисел перед останнім
//входженням найбільшого числа.

function countNegativeBeforeLastMax(numbers) {
    if (numbers.length < 2) return 0;

    let maxNumber = numbers[0];
    let indexMaxNumber = 0;
    let count = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] >= maxNumber) {
            maxNumber = numbers[i];
            indexMaxNumber = i;
        }
    }

    for (let i = indexMaxNumber - 1; i >= 0; i--) {
        if (numbers[i] < 0) {
            count++;
        }
    }

    return count;
}

console.log(countNegativeBeforeLastMax([-2, 8, -3, 4, 8, -1]))