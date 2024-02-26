// [1,0,2,30,45,0,456,0] -> [1,2,30,45,456,0,0,0]

function zeroToEnd(arr) {
    let newArr = [];
    let conuter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            newArr.push(arr[i]);
        } else {
            conuter++;
        }
    }
    for(let i = 0; i < conuter; i++) {
        newArr.push(0);
    }
    return newArr;
}
console.log(zeroToEnd([1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6]));