function findMaxIndex(numbers) {
    if (numbers.length === 0) return -1;

    let maxNumber = numbers[0];
    let maxIndex = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (maxNumber > numbers[i]) {
            maxNumber = numbers[i];
            maxIndex = i;
        }
    }

    return maxIndex;
}

console.log(findMaxIndex([3, 7, 2, 5]));