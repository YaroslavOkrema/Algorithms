const students = [
    {name: 'Alex', gender: 'male'},
    {name: 'Anna', gender: 'female'},
    {name: 'Mike', gender: 'male'},
    {name: 'Sofia', gender: 'female'},
];

function countByGender(students) {
    return students.reduce((acc, item) => {
        acc[item.gender] = (acc[item.gender] || 0) + 1;
        return acc;
    }, {})
}

console.log(countByGender(students))