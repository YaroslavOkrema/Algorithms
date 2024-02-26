// input 5
// output [5, 4, 3, 2, 1]

function reversSequence(num) {
    const arr = [];
    for(let i = num; i > 0; i--) {
        arr.push(i);
    }
    return arr;
}
console.log(reversSequence(5));