const dog = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};

// for (let key in dog) {
//     console.log(dog[key]);
// }

const keys = Object.keys(dog);
// console.log(keys);

const values = Object.values(dog);
// console.log(values);

const entries = Object.entries(dog);
// console.log(entries);

for (const key of Object.keys(dog)) {
    console.log(key);
}

for (const value of Object.values(dog)) {
    console.log(value);
}

for (const entry of Object.entries(dog)) {
    console.log(entry);
}