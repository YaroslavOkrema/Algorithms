const students = [
    {name: 'Alex', age: 20},
    {name: 'Roma', age: 20},
    {name: 'Anna', age: 22},
    {name: 'Mike', age: 24},
];

function groupByAge(students) {
    return students.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {})
}

console.log(groupByAge(students));