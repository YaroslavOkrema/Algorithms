// Напиши функцію countBetweenMinAndMax(numbers), яка повертає кількість елементів між індексами найменшого та найбільшого числа.
//     Самі мінімальне й максимальне числа рахувати не потрібно.
//     Якщо масив містить менше двох елементів, поверни 0.
// countBetweenMinAndMax([3, 8, 2, 5, 1]); // 2
// // max має індекс 1, min має індекс 4
// // між ними елементи з індексами 2 і 3
// countBetweenMinAndMax([1, 4, 7]); // 1
// countBetweenMinAndMax([5]); // 0
// countBetweenMinAndMax([]); // 0

function countBetweenMinAndMax(numbers) {
    if (numbers.length < 2) {
        return 0;
    }

    let minNumber = numbers[0];
    let maxNumber = numbers[0];
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
            maxIndex = i;
        }

        if (numbers[i] < minNumber) {
            minNumber = numbers[i];
            minIndex = i;
        }
    }

    if (minIndex === maxIndex) {
        return 0;
    }

    return Math.abs(maxIndex - minIndex) - 1;
}

console.log(countBetweenMinAndMax([3, 8, 2, 5, 1]));