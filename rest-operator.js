// spread operator
// let course = {
//     name: 'JavaScript for Beginners',
//     duration: '3 hours'
// };

// let newCourse = {
//     ...course,
//     name: 'JavaScript Pro'
// };

// console.log(newCourse);

// REST OPERATOR; used with functions
// function multiply(...args) {
//     return args.reduce((accumulator, currentValue) => accumulator * currentValue);
// }

// console.log(multiply(1, 2, 3, 4));

function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}

console.log(multiply(2, 1, 2, 3, 4));