const students = [
    {name: 'Alex', age: 20},
    {name: 'Maximilian', age: 21},
    {name: 'Jo', age: 22},
];

function upperCaseName(students) {
    return students.map(students => students.name.toUpperCase())
}

console.log(upperCaseName(students))