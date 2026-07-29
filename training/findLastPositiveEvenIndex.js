function findLastPositiveEvenIndex(numbers) {
    let lastPositiveEvenIndex = -1;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0 && numbers[i] % 2 === 0) {
            lastPositiveEvenIndex = i;
        }
    }

    return lastPositiveEvenIndex;
}

console.log(findLastPositiveEvenIndex([1, 2, 3, 4, 6]));