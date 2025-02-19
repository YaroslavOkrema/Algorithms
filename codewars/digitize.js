// 35231 => [1,3,2,5,3]
function digitize(number) {
    return number
        .toString()
        .split('')
        .reverse()
        .map(strNumbers => Number(strNumbers));
}

console.log(digitize(35231))