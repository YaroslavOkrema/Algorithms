const students = [
    {name: 'Alex', age: 20},
    {name: 'Maximilian', age: 21},
    {name: 'Jo', age: 22},
];

function findLongestStudentsName(students) {
    return students.reduce((acc, item) => {
        return item.name.length > acc.name.length ? item : acc
    }, students[0])
}

console.log(findLongestStudentsName(students))