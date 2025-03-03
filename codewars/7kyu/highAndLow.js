//highAndLow("1 2 3 4 5");  return "5 1"

function highAndLow(str){
    let numbers = str.split(' ').map(Number);
    let maxNum = Math.max(...numbers);
    let minNum = Math.min(...numbers);

    return `${maxNum} ${minNum}`;
}

console.log(highAndLow("1 2 3 4 5"));