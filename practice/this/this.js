function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Yaroslav',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

console.log(person.logInfo());

const lena = {
    name: 'Elena',
    age: 23
}

person.logInfo.bind(lena, 'Frontend', '21312312312');
person.logInfo.call(lena, 'Frontend', '21312312312');