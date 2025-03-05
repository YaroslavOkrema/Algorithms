// Input: 42145 Output: 54421
function descendingOrder(n){
    let descending= n.toString().split('').sort((a, b) => b - a).join('');
    return Number(descending);
}

console.log(descendingOrder(42145));