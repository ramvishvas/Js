// Before ES6
const car = {};
car['color'] = 'red';
car.owner = 'Flavio';
console.log(car['color']); //red
console.log(car.color); //red
console.log(car.owner); //Flavio
console.log(car['owner']); //Flavio

const m = new Map();
m.set('color', 'red');
m.set('age', 2);

const color = m.get('color');
const age = m.get('age');

m.delete('color');

m.clear();

const hasColor = m.has('color');

const size = m.size;

const m = new Map([['color', 'red'], ['owner', 'Flavio'], ['age', 2]]);

// Weird situations you'll almost never find in real life
const m = new Map();
m.set(NaN, 'test');
m.get(NaN); //test
const m = new Map();
m.set(+0, 'test');
m.get(-0); //test

// Iterate over map keys
for (const k of m.keys()) {
    console.log(k);
}

// Iterate over map values
for (const v of m.values()) {
    console.log(v);
}

// Iterate over map key, value pairs
for (const [k, v] of m.entries()) {
    console.log(k, v);
}
// which can be simplified to
for (const [k, v] of m) {
    console.log(k, v);
}

// Convert the map keys into an array
const a = [...m.keys()];

// Convert the map values into an array
const a = [...m.values()];
