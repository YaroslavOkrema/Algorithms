const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
]

const findObject = (arr, item, value) => {
    return arr.find(obj => obj[item] === value);
}

console.log(findObject(users, 'id', 2))