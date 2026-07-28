// Напиши функцію findFirstPositiveEvenIndex(numbers), яка повертає індекс першого числа, яке одночасно є додатним і парним.
// Якщо такого числа немає, поверни -1.

function findFirstPositiveEvenIndex(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0 && numbers[i] % 2 === 0) {
            return i
        }
    }

    return -1;
}

console.log(findFirstPositiveEvenIndex([1, -2, 3, 4, 6]));