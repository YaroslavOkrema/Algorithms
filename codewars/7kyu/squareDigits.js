// 9119 => 811181
function squareDigits(num){
    let square = num.toString().split('').map(number => number * number).join('');
    return Number(square);
}

console.log(squareDigits(3212));