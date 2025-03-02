function mergeArrays(arr1, arr2) {
    let mergeArr = arr1.concat(arr2).sort((a, b) => a - b);

    return mergeArr.filter((el, index) => mergeArr.indexOf(el) === index);
}

function mergeArrays2(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
}

console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));
console.log(mergeArrays2([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));