const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
]

function sumUsersAge(arr) {
    return arr.reduce((acc, item) => acc + item.age, 0)
}

console.log(sumUsersAge(users))