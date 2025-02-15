// "sam harris" => S.H
function abbrevName(name){
    return name.split(' ').map(letter => letter[0]).join('.').toUpperCase();
}

console.log(abbrevName("sam harris"));