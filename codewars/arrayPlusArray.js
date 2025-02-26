function arrayPlusArray(arr1, arr2) {
    let sumArr1 = arr1.reduce((sum, num) => sum + num, 0);
    let sumArr2 = arr2.reduce((sum, num) => sum + num, 0);

    return sumArr1 + sumArr2;
}

function arrayPlusArray2(arr1, arr2) {
    let newArr = [...arr1, ...arr2];

    return newArr.reduce((sum, num) => sum + num, 0);
}

function arrayPlusArray3(arr1, arr2) {
    return arr1.concat(arr2).reduce((sum, num) => sum + num, 0);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray2([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray3([1, 2, 3], [4, 5, 6]));