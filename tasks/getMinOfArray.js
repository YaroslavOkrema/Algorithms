// Напишите функцию, которая принимает массив чисел и возвращает наименьшее число в этом массиве.
function getMinOfArray(nums) {
    return Math.min(...nums);
}
console.log(getMinOfArray([3, 0, 10, 4, 7, 8, -1, -10, 20, 22]));

//second solution
function getMinOfArray(nums) {
    let currentMin = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < currentMin) currentMin = nums[i];
    }
    return currentMin;
}
console.log(getMinOfArray([3, 0, 10, 4, 7, 8, -1, -10, 20, 22]));