// Напиши функцію sumBetweenIndexes(numbers, target), яка повертає суму елементів між першим і останнім входженням target.
//     Самі значення target на межах додавати не потрібно.
//     Якщо target відсутній або зустрічається лише один раз, поверни 0.
// sumBetweenIndexes([4, 7, 2, 3, 7, 5], 7); // 5
// sumBetweenIndexes([5, 1, 4, 5], 5); // 5
// sumBetweenIndexes([3, 4, 5], 4); // 0
// sumBetweenIndexes([1, 2, 3], 8); // 0
// sumBetweenIndexes([7, 7], 7); // 0

function sumBetweenIndexes(numbers, target) {
    let firstIndex = -1;
    let lastIndex = -1;
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            if (firstIndex === -1) {
                firstIndex = i;
            }

            lastIndex = i;
        }
    }

    if (firstIndex === lastIndex) {
        return 0;
    }

    for (let i = firstIndex + 1; i < lastIndex; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sumBetweenIndexes([4, 7, 2, 3, 7, 5], 7));