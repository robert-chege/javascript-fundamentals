// let productcolors = ['blue', 'green'];

// productcolors[0] = 42;

// console.log(productcolors);
// console.log(productcolors[0]);
// console.log(productcolors.length);

// const numbers = [5, 4, 3, 2, 1, 3];

// numbers.push(7, 8, 9);
// console.log(numbers);

// numbers.unshift(7, 8);
// console.log(numbers);

// numbers.splice(1, 0, 25, 27);
// console.log(numbers);

// PRIMITIVE DTYPES
// const indexOfThree = numbers.indexOf(7);
// console.log(indexOfThree);

// const lastIndexOfThree = numbers.lastIndexOf(3);
// console.log(lastIndexOfThree);

// const lastIndexOfTen = numbers.lastIndexOf(10);
// console.log(lastIndexOfThree);

// if (lastIndexOfTen === -1) {
//     console.log('10 is not found in the array.')
// }

// if (!numbers.includes(10)) {
//     console.log('10 is not found in the array.');
// }

// REFERENCES OBJECTS
// const employees = [
//     {
//         id:1,
//         name: 'Jim'
//     },
//     {
//         id:2,
//         name: 'Mike'
//     },
//     {
//         id:3,
//         name: 'Pam'
//     }
// ];

// arrow fucntions
// const add = (num1, num2) => {
//     return num1 + num2;
// }

// const add = (num1, num2) => num1 + num 2;

// const employee = employees.findIndex((e) => e.name === 'Jim');
// console.log(employee);

//  REMOVING ELEMNTS
// const numbers = [1, 2, 3, 4, 5];

// const lastElement = numbers.pop();
// console.log(`lastElement: ${lastElement}\n`);

// const firstElement = numbers.shift();
// console.log(`firstElemenst: ${firstElement}\n`);

// const midElement = numbers.splice(1, 1);
// console.log(`midElement: ${midElement}`);

// EMPTING AN ARRAY
// while (numbers.length > 0)
//     numbers.pop();

// numbers.length = 0;
// console.log(numbers);

// const deletedNumbers = numbers.splice(0, numbers.length);
// console.log(`deletedNumbers: ${deletedNumbers}`);

// COMBINING AND SLICING ARRAYS
const exampleNumbersA = [1, 2, 3];
const exampleNumbersB = [4, 5, 6];

// const combinedArray = exampleNumbersA.concat(exampleNumbersB);
// console.log(combinedArray);

// const firstSlice = combinedArray.slice(0, 4);
// console.log(firstSlice);

// let combined = [...exampleNumbersA,9, ...exampleNumbersB, 10]
// console.log(combined);

// ITERATING OVER AN ARRAY
// for (num of numbers)
//     console.log(num);

// numbers.forEach(num => console.log(num));
// numbers.forEach((num, index) => console.log(`At index ${index}: ${num}`));

// CONVERTING NUMBERS TO STRING
// const joinedNumbers = numbers.join(', '); // converts to string
// console.log(joinedNumbers);

// const courseName = 'JavaScript for Beginners'
// const parts = courseName
//     .toLowerCase()
//     .split(' ');


// const urlSlug = parts.join('-')
// console.log(urlSlug);

// SORTING ARRAYS
// let characters = ['c', 'd', 'b', 'a'];
// characters.sort();
// console.log(characters);

// characters.reverse();
// console.log(characters);

// let workers = [
//     {id: 1, name: 'Jen'},
//     {id: 2, name: 'Sam'},
//     {id: 3, name: 'Tim'},
//     {id: 4, name: 'Ann'},
// ];

// workers.sort((a, b) => {
//     const lowerCaseA = a.name.toLowerCase();
//     const lowerCaseB = b.name.toLowerCase();

//     if (lowerCaseA < lowerCaseB) return -1;
//     if (lowerCaseA > lowerCaseB) return 1;
//     return 0;
// });
// console.log(workers);

// TESTING ELEMENTS IN ARRAYS
// const numbers = [2, 4, 6, 8, 10];

// const areAllEven = numbers.every(num => num % 2 === 0);
// console.log(`areAllEven: ${areAllEven}`);

// const numbers = [1, 3, 5, 7, 8, 9];

// const hasOneEvenNumber = numbers.some(num => num % 2 === 0);
// console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`);

// FILTERING IN ARRAYS
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(`evenNumbers: ${evenNumbers}`);

// const employees = [
//     {id: 1, name: 'Alice', role: 'Developer'},
//     {id: 2, name: 'Bob', role: 'Designer'},
//     {id: 3, name: 'Rob', role: 'Developer'},
//     {id: 4, name: 'Bert', role: 'Manager'}
// ];

// const developers = employees.filter(employee => employee.role === 'Developer');
// console.log(developers);

// MAPPING IN ARRAYS
// const numbers = [2, 4, 6, 8, 10];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

// const characters = ['a', 'b', 'c', 'd'];
// const upperCaseCharacters = characters.map(char => char.toUpperCase());
// console.log(upperCaseCharacters);

// const employees = [
//     {id: 1, name: 'Alice', email: 'AliCe@gmail.com'},
//     {id: 2, name: 'Steven', email: 'SteVen@gmail.com'},
//     {id: 3, name: 'Joe', email: 'Joe@gmail.com'}
// ];

// const updatedEmployees = employees.map(employee => ({
//     ...employee,
//     email: employee.email.toLowerCase()
// }));

// console.log(updatedEmployees);

// REDUCING ARRAYS
const numbers = [1, 10, 5, 14];
// let sum = 0;

// for (const num of numbers)
//     sum += num;

// console.log(`Total Sum: ${sum}`);

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0);

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(`Total Sum: ${sum}`);


