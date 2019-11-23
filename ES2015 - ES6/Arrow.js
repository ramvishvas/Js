const myFunction = () => doSomething();
const myFunction = (param1, param2) => doSomething(param1, param2);
const myFunction = param => doSomething(param);

const myFunction = () => 'test';
const myFunction = () => ({ value: 'test' });

// it wont work -> type error
const car = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: () => {
        return `${this.manufacturer} ${this.model}`;
    }
};

// it will work
const car = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: function() {
        return `${this.manufacturer} ${this.model}`;
    }
};
