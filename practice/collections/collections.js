const obj = {
    name: 'Ivan',
    age: '21',
    job: 'frontend'
}

const entries = [
    ['name', 'Ivan'],
    ['age', '21'],
    ['job', 'frontend']
]

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

const map = new Map(entries);

map.set('newField', 23).set(obj, 'Value of obj');

// console.log(map.get(obj));
// map.delete('job');
// console.log(map.has('job'));
// console.log(map.size);
// map.clear();
// console.log(map.size);

/*for (let [key, value] of map) {
    console.log(key, value);
}*/

/*
for (let key of map.keys()) {
    console.log(key);
}*/

/*
map.forEach((val, key, m) => {
    console.log(val, key);
});*/

/*
const array = [...map];

const mapObj = Object.fromEntries(map.entries());

console.log(mapObj);*/

const users = [
    { name: 'Elena' },
    { name: 'Alex' },
    { name: 'Ivan' }
]

const visits = new Map();

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user);
}

// console.log(lastVisit(users[2]));


const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);

set.add(10).add(20).add(30).add(20);

// console.log(set.delete(1));

// console.log(set.entries());

/*
for (let key of set) {
    console.log(key);
}*/

function uniqValues(array) {
    return [...new Set(array)]
}

console.log(uniqValues([1, 2, 2, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6]));
