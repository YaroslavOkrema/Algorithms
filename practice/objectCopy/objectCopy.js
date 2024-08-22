// просте копіювання
const simpleUser = {
    name: 'John Doe',
    age: 34,
    title: 'Developer',
}
const simpleUserCopy1 = {...simpleUser};
// console.log(simpleUserCopy1);
const simpleUserCopy2 = Object.assign({}, simpleUser);
// console.log(simpleUserCopy2);

const developerUser = {
    name: 'John Doe',
    birthDate: new Date('1985-04-08'),
    title: 'Developer',
    skills: ['JS', 'TS', 'Angular']
}

// const developerUserCopy = {...developerUser};
// const developerUserCopy = JSON.parse(JSON.stringify(developerUser));
const developerUserCopy = structuredClone(developerUser);
developerUserCopy.skills.push('React');

console.log(developerUserCopy);

const complexObject = {
    set: new Set([1, 2, 3]),
    map: new Map([[1, 2]]),
    regex: /foo/,
    deep: { array: [new Blob()]},
    // error: new Error('Boom!')
}

/*
console.log(
    JSON.parse(JSON.stringify(complexObject))
)

console.log(structuredClone(complexObject));*/
