const s = new Set();
s.add('one');
s.add('two');
console.log(s);
s.has('one'); //true
s.has('three'); //false
s.delete('one');
s.size;
s.clear();

for (const k of s.keys()) {
    console.log(k);
}
for (const k of s.values()) {
    console.log(k);
}

const i = s.entries();
console.log(i.next());

s.forEach(v => console.log(v));

for (const k of s) {
    console.log(k);
}

const s = new Set([1, 2, 3, 4]);

// Convert the Set keys into an array
const a = [...s.keys()];
// or
const a = [...s.values()];
