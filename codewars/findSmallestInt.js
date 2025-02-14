function findSmallestInt(arr) {
    return Math.min(...arr)
}

function findSmallestInt2(arr) {
    let num = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) num = arr[i];
    }

    return num;
}

console.log(findSmallestInt([34, 15, 88, 2]));
console.log(findSmallestInt2([34, 15, 88, 2]));