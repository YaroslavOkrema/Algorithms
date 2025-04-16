const arrKeys = ['car', 'male']

const obj = {
    age: 18,
    name: 'Roma',
    male: true,
    car: "Mustang"
}

function deleteOptions(obj, keys) {
    for (let i = 0; i < keys.length; i++) {
        delete obj[keys[i]]
    }

    return obj
}

function deleteOptions2(obj, keys) {
    keys.forEach(key => {
        delete obj[key]
    })

    return obj
}


console.log(deleteOptions(obj, arrKeys))
console.log(deleteOptions2(obj, arrKeys))
