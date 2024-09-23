// Напишите функцию, которая принимает массив чисел и возвращает их сумму

function sumArray(nums) {
    return nums.reduce((sum, current) => sum + current, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

// second solution
function sumArray2(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray2([1, 2, 3, 4, 5]));

// Напишите функцию, которая принимает массив строк, чисел и возвращает их сумму
function mixSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    return sum;
}
console.log(mixSum([1, 2, 3, 4, 5, '10']));

function mixSum2(arr) {
    return arr.reduce(function (sum, num) {
        return sum + parseInt(num);
    })
}
console.log(mixSum2([1, 2, 3, 4, 5, '10']));
