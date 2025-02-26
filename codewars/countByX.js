//x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
//x = 2, n = 5  --> [2,4,6,8,10]


function countBy(x, n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push(i * x);
    }

    return arr;
}

console.log(countBy(1, 10))