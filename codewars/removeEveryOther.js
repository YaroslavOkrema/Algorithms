function removeEveryOther(arr){
    return arr.filter((values, index) => index % 2 === 0);
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));