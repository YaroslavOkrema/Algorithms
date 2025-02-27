function sumMix(x){
    return x.reduce((sum, num) => sum + Number(num), 0);
}

console.log(sumMix([9, 3, '7', '3']));