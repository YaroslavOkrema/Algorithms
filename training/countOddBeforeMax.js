//Напиши функцію countOddBeforeMax(numbers), яка повертає кількість непарних чисел, розташованих перед найбільшим числом у масиві.
    //Саме максимальне число враховувати не потрібно.

function countOddBeforeMax(numbers) {
    if (numbers.length < 2) return 0;

    let maxNumber = numbers[0];
    let indexMaxNumber = 0;
    let count = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
            indexMaxNumber = i;
        }
    }

    for (let i = indexMaxNumber - 1; i >= 0; i--) {
        if (numbers[i] % 2 !== 0) {
            count++;
        }
    }



    return count;
}

console.log(countOddBeforeMax([-3, -2, 5]))