function sum2(num) {
    let res = 0;
    for(let i = 1; num >= i; i++) {
        res+=i;
    }
    return res;
}
console.log(sum2(2));