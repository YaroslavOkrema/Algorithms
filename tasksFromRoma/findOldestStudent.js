const students = [
    {name: 'Alex', age: 20},
    {name: 'Anna', age: 22},
    {name: 'Mike', age: 24},
];

function findOldestStudent(students) {
    return students.reduce((acc, item) => {
        return item.age > acc.age ? item : acc
    }, students[0])
}

console.log(findOldestStudent(students))