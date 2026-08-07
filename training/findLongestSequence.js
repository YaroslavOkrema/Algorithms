// Напиши функцію, яка повертає довжину найдовшої послідовності однакових символів, що стоять поспіль.
// findLongestSequence("aaabbc");   // 3
// findLongestSequence("abbccccd"); // 4

function findLongestSequence(text) {
    if (text.length === 0) return 0;

    let curretLength = 1;
    let maxLength = 1;

    for (let i = 1; i < text.length; i++) {
        if (text[i] === text[i - 1]) {
            curretLength++;
        } else {
            curretLength = 1;
        }

        if (curretLength > maxLength) {
            maxLength = curretLength;
        }
    }

    return maxLength;
}

console.log(findLongestSequence("aaabbc"))