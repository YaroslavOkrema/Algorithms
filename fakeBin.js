// Задав строку цифр, замените любую цифру ниже 5 на '0', а любую цифру 5 и выше - на '1'. Верните полученную строку.
// '45385593107843568' --> '01011110001100111'

function fakeBin(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        if(parseInt(str[i]) > 5) {
            newStr += 1;
        } else if(parseInt(str[i]) === 5) {
            newStr += 1;
        } else {
            newStr += 0;
        }
    }
    return newStr;
}
console.log(fakeBin('45385593107843568')); // '01011110001100111'