class Rectangle {
    width;
    height;

    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    calcArea() {
        return this.width * this.height;
    }
}

const  rect = new Rectangle(5, 10);
const  rect2 = new Rectangle(2, 6);
const  rect3 = new Rectangle(7, 8);
rect.calcArea();


// Инкапсуляция

class User {
    private _username;
    private _password;
    private _id;

    constructor(username, password) {
        this._username = username;
        this._password = password;
        this._id = generateRandomId();
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get id() {
        return this._id;
    }
}

const user = new User('Ivan', '2312313');
user.password = 5;

class Database {
    private _url;
    private _port;
    private _username;
    private _password;
    private _tables;

    constructor(url, port, username, password) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = []
    }

    public createNewTable(table) {
        this._tables.push(table);
    }

    public clearTables() {
        this._tables = [];
    }

    get url() {
        return this._url;
    }

    get port() {
        return this._port;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

    get tables() {
        return this._tables;
    }
}

const db = new Database(1,2,3,4);
db.createNewTable({name: 'roles'});
db.clearTables();

// Наследование

class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    public greeting() {
        console.log(`Hello I'm person my name is ${this._firstName}`)
    }

    public get fullName() {
        return `Last Name: ${this._lastName} First Name:  ${this._firstName}`;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            this._age = 0;
        } else {
            this._age = value;
        }
    }
}

class Employer extends Person {
    private inn;
    private number;
    private snils;

    constructor(firstName, lastName, age, inn, number, snils) {
        super(firstName, lastName, age);
        this.inn = inn;
        this.number = number;
        this.snils = snils;
    }

    public greeting() {
        console.log(`Hello I'm person my name is ${this.firstName}`)
    }
}

class Developer extends Employer {
    private level;

    constructor(firstName, lastName, age, inn, number, snils, level) {
        super(firstName, lastName, age, inn, number, snils);
        this.level = level;
    }

    public greeting() {
        console.log(`Hello I'm person my name is ${this.firstName}`)
    }
}

const dev = new Developer('Ivan', 'Ivanov', 15, '3214214', '44442141', '21', 'SENIOR');
const employee = new Employer( 'Ivan', 'Ivanov', 15, '3214214', '44442141', '21');
const person = new Person('Person', 'Avatar', 14);

// dev.greeting();
// employee.greeting();
// person.greeting();

const personList: Person[] = [dev, employee, person];

function massGreeting(persons: Person[]) {
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        person.greeting();
    }
}

massGreeting(personList);
