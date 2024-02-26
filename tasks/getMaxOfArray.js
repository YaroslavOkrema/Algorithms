//Напишите функцию, которая принимает массив чисел и возвращает наибольшее число в этом массиве.
function getMaxOfArray(nums) {
    return Math.max(...nums);
}
console.log(getMaxOfArray([1, 3, 6, 2, 10, 23]));

//second solution
function getMaxOfArray(arr) {
    let currentMax = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > currentMax) currentMax = arr[i];
    }
    return currentMax;
}
console.log(getMaxOfArray([1, 3, 6, 2, 10, 23, 12, 24, 42, 100]));
