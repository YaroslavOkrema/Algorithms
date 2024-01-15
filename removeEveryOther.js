// Возьмите массив и удалите из него каждый второй элемент. 
// Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

function removeEveryOther(arr){
    for(let i = 1; i < arr.length; i++) {
        arr.splice(i, 1);
    }
    return arr;
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));