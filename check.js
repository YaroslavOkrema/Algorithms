// Вернуть true, если массив содержит значение, false - если нет.
// ([101, 66, 14, 43, 65, 23, 68], 65) true 
// (['what', 'a', 'great', 'kata'], 'kat'), false)

function check(arr, value) {
   for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return true;
        }
   }
   return false;
}
console.log(check([101, 66, 14, 43, 65, 23, 68], 65));