/* Задача - написать функцию, которая принимает 
строку String и возвращает массив/список с длиной каждого 
слова, добавленной к каждому элементу.

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"] */

function addLength(str) {
    const words = str.split(' ');
    let resArr = [];
    for (let i = 0; i < words.length; i++) {
      const letterCount = words[i];
      let length = letterCount.length;
      resArr.push(letterCount + " " + length);
    }
    return resArr;
  }
console.log(addLength('you will win'));   // [ 'you 3', 'will 4', 'win 3' ]

// второе решение
function addLength2(str) {
    return str.split(' ').map((item) => item + ' ' + item.length);
}
console.log(addLength2('you will win'));