const students = [
    {name: 'Alex', age: 20},
    {name: 'Roma', age: 20},
    {name: 'Anna', age: 22},
    {name: 'Mike', age: 24},
];

function groupByAge(students) {
    return students.reduce((acc, item) => {
        if (!acc[item.age]) {
            acc[item.age] = []
        }
        acc[item.age].push(item)
        return acc
    }, {})
}

console.log(groupByAge(students));