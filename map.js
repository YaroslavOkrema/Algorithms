// input [2, 2, 2]
// output [4, 4, 4]

function map(array) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}
console.log(map([2, 2, 2]));