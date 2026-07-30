// Напиши функцію sumBetweenMinAndMax(numbers), яка повертає суму елементів між найменшим і найбільшим числами.
//     Самі мінімальне та максимальне числа додавати не потрібно.
//     Якщо масив містить менше двох елементів або між мінімумом і максимумом немає елементів, поверни 0.
// sumBetweenMinAndMax([3, 8, 2, 5, 1]); // 7
// // між max з індексом 1 та min з індексом 4: 2 + 5
// sumBetweenMinAndMax([1, 4, 7]); // 4
// sumBetweenMinAndMax([5, 1]); // 0
// sumBetweenMinAndMax([5]); // 0
// sumBetweenMinAndMax([]); // 0

function sumBetweenMinAndMax(numbers) {
    if (numbers.length < 2) {
        return 0;
    }

    let minNumber = numbers[0];
    let maxNumber = numbers[0];
    let minIndex = 0;
    let maxIndex = 0;
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
            maxIndex = i;
        }

        if (numbers[i] < minNumber) {
            minNumber = numbers[i];
            minIndex = i;
        }
    }

    const startIndex = Math.min(minIndex, maxIndex) + 1;
    const endIndex = Math.max(minIndex, maxIndex);

    for (let i = startIndex; i < endIndex; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sumBetweenMinAndMax([3, 8, 2, 5, 1]))