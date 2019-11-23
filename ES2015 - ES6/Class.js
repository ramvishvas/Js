class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        return 'Hello, I am ' + this.name + '.';
    }
}

const person = new Person('Flavio');
person.hello();

class Programmer extends Person {
    hello() {
        return super.hello() + ' I am a programmer.';
    }
}
const programmer = new Programmer('Flavio');
programmer.hello();

class NewPerson {
    constructor(name) {
        this.name = name;
    }
    set name(value) {
        this.name = value;
    }
    get name() {
        return this.name;
    }
}
