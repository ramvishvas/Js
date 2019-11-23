const a = [1, 2, 3];
const b = [...a, 4, 5, 6];
const c = [...a];
const newObj = { ...oldObj };
const hey = 'hey';
const arrayized = [...hey];

const f = (foo, bar) => {};
const a = [1, 2];
f(...a);

const numbers = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => a + b + c + d + e;
const sum = sum(...numbers);

const { first, second, ...others } = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5
};
first; // 1
second; // 2
others; // { third: 3, fourth: 4, fifth: 5 }

const items = { first, second, ...others };
items; //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
