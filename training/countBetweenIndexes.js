// Напиши функцію countBetweenIndexes(numbers, target), яка повертає кількість елементів, розташованих між першим і останнім входженням числа target.
//     Самі входження target рахувати не потрібно.
//     Якщо target не знайдений або зустрічається лише один раз, поверни 0.
// countBetweenIndexes([4, 7, 2, 3, 7, 5], 7); // 2
// countBetweenIndexes([5, 1, 5], 5); // 1
// countBetweenIndexes([3, 4, 5], 4); // 0
// countBetweenIndexes([1, 2, 3], 8); // 0
// countBetweenIndexes([], 5); // 0

function countBetweenIndexes(numbers, target) {
    let firstIndex = -1;
    let lastIndex = -1;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            if (firstIndex === -1) {
                firstIndex = i;
            }

            lastIndex = i;
        }
    }

    if (firstIndex === lastIndex) {
        return 0
    }

    return lastIndex - firstIndex - 1;
}

console.log(countBetweenIndexes([4, 7, 2, 3, 7, 5], 7));