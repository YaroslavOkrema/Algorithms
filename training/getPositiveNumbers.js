function getPositiveNumbers(numbers) {
    let positiveNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }

    return positiveNumbers;
}

console.log(getPositiveNumbers([1, -2, 3, 0, -5, 7]));