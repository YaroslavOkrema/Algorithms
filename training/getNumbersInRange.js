function getNumbersInRange(numbers, min, max) {
    let numbersInRange = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= min && numbers[i] <= max) {
            numbersInRange.push(numbers[i]);
        }
    }

    return numbersInRange;
}

console.log(getNumbersInRange([1, 5, 10, 15, 20], 5, 15));