// Задав массив целых чисел, определите, является ли сумма его элементов четной или нечетной.
// Input: [0, 1, 4]
// Output: "odd"

function oddOrEven(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
  	if(sum % 2 === 0) {
      return 'even'
    } else {
      return 'odd'
    }
}
console.log(oddOrEven([0, 1, 4]));