// primitive data types pass by copy while objects and arrays pass by reference

// let a = 10;
// let b = a;

// b = 20;
// console.log(a);
// console.log(b);
// let a = {value: 10};
// let b = a;

// b.value = 20;

// console.log(a);
// console.log(b);

let a = {value: 10};
let b = {...a};

// Object.assign(b, a);

b.value = 20;

console.log(a);
console.log(b);
