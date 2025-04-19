const students = [
    {name: 'Alex', age: 20},
    {name: 'Maximilian', age: 21},
    {name: 'Jo', age: 22},
];

function findAverageStudentsAge(students) {
    return students.reduce((acc, item) => acc + item.age, 0) / students.length
}

console.log(findAverageStudentsAge(students))