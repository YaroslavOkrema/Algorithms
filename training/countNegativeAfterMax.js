// Напиши функцію countNegativeAfterMax(numbers), яка повертає кількість від’ємних чисел, розташованих після найбільшого числа в масиві.
//     Якщо масив порожній або після максимуму немає від’ємних чисел, поверни 0.
// countNegativeAfterMax([2, 8, -1, 4, -3]); // 2
// countNegativeAfterMax([-2, 5, 3, -1]); // 1
// countNegativeAfterMax([1, 2, 3]); // 0
// countNegativeAfterMax([]); // 0

function countNegativeAfterMax(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let maxNumber = numbers[0];
    let maxNumberIndex = 0;
    let count = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
            maxNumberIndex = i;
        }
    }

    for (let i = maxNumberIndex + 1; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            count++;
        }
    }

    return count;
}

console.log(countNegativeAfterMax([2, 8, -1, 4, -3]))