function sumPositiveAfterLastMin(numbers) {
    if (numbers.length < 2) return 0;

    let minNumber = numbers[0];
    let minIndex = 0;
    let sum = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] <= minNumber) {
            minNumber = numbers[i];
            minIndex = i;
        }
    }

    for (let i = minIndex + 1; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }

    return sum;
}

console.log(sumPositiveAfterLastMin([2, -5, 3, -5, 4, 1]))