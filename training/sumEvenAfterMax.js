function sumEvenAfterMax(numbers) {
    if (numbers.length < 2) return 0;

    let maxNumber = numbers[0];
    let indexMaxNumber = 0;
    let sum = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
            indexMaxNumber = i;
        }
    }

    for (let i = indexMaxNumber + 1; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }

    return sum;
}

console.log(sumEvenAfterMax([3, 8, 2, 5, 4]))