// Вы получаете массив чисел, возвращаете сумму всех положительных чисел.
// Пример [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSumArr(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(positiveSumArr([1,-4,7,12]));