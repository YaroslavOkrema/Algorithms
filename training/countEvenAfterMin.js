//Напиши функцію countEvenAfterMin(numbers), яка повертає кількість парних чисел, розташованих після найменшого числа в масиві.
// Нуль вважається парним числом.

function countEvenAfterMin(numbers) {
    let minNumber = numbers[0];
    let indexMinNumber = 0;
    let count = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minNumber) {
            minNumber = numbers[i];
            indexMinNumber = i;
        }
    }

    for (let i = indexMinNumber + 1; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEvenAfterMin([3, -4, 2, 5]))