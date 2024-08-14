// FUNCTION DECLARATIONS
//  function sayHi(name) {
//     console.log('Hi! ' + name);
// }

// sayHi('Robert')

// function multiply(num1, num2) {
//     return num1 * num2
// }

// console.log(multiply(2, 2));

// FUNCTION  EXPRESSIONS
// let sayHi = function() {
//     console.log('Hi!')
// };

// sayHi();

// let greetings = function sayHi() {
//     console.log('Hi!')
// };

// greetings();

// DEFAULT PARAMETERS
function codeDetails(language = 'JavaScript', tool = 'VS Code') {
    console.log(`Writing code in ${language} using ${tool}`);
}

codeDetails();
codeDetails('Python');
codeDetails('C#', 'Visual Studio');

// THIS KEYWORD
function introduce(language) {
    console.log(this.name + 'teaches' + language);
}

const instructor = {name: 'Steven'};
const introduction = introduce.bind(instructor);
introduction('English');