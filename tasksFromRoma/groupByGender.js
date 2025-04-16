const students = [
    {name: 'Alex', age: 20, gender: 'male'},
    {name: 'Roma', age: 20, gender: 'male'},
    {name: 'Anna', age: 22, gender: 'female'},
    {name: 'Mike', age: 24, gender: 'male'},
];

function groupByGender(students) {
    return students.reduce((acc, item) => {
    }, {})
}

console.log(groupByGender(students));