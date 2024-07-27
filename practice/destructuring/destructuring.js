// деструктуризация массивов
// пропуск элементов
// лишние значения
// значение по умолчанию

// деструктуризация объектов
// значение по умолчанию
// переименование объектов

/*// деструктуризация массива
const [one, two,three, four] = [1, 2, 3, 4];

// деструктуризация объекта
const {user_name, user_age} = { user_name: 'Ivan', user_age: 14 };
console.log(user_name, user_age);

const [, , jack] = ['Alex', 'John', 'Jack'];
// const jack = users[2];
console.log(jack);*/

const SERVER_ARRAY = [];
const SERVER_OBJ = { user_name: 'Alex' };
const { user_name = 'unknown', user_age = 0 } = SERVER_OBJ;
console.log(user_name, user_age);
/*
const [userName = 'unknown', userAge = 0, hasCar = false] = SERVER_ARRAY;
console.log(userName, userAge, hasCar);*/
