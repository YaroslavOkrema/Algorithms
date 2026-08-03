function countPositiveBetweenMinAndMax(numbers) {
    let minNumber = numbers[0];
    let maxNumber = numbers[0];
    let indexMinNumber = 0;
    let indexMaxNumber = 0;
    let count = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minNumber) {
            minNumber = numbers[i];
            indexMinNumber = i;
        }

        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
            indexMaxNumber = i;
        }
    }

    let minIndex = Math.min(indexMinNumber, indexMaxNumber) + 1;
    let maxIndex = Math.max(indexMinNumber, indexMaxNumber);

    for (let i = minIndex; i < maxIndex; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }

    return count;
}

console.log(countPositiveBetweenMinAndMax([3, 8, -2, 5, 1, -5]))