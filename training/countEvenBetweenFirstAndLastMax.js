function countEvenBetweenFirstAndLastMax(numbers) {
    if (numbers.length === 0) return 0;

    let maxNumber = numbers[0];
    let firstMaxIndex = 0;
    let lastMaxIndex = 0;
    let count = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
            firstMaxIndex = i;
        }

        if (numbers[i] >= maxNumber) {
            maxNumber = numbers[i];
            lastMaxIndex = i;
        }
    }

    for (let i = firstMaxIndex + 1; i < lastMaxIndex; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEvenBetweenFirstAndLastMax([2, 8, 3, 4, 8, 6]));