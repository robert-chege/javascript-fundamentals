// let priceOfChocolate = 1.99;
// let amountInCash = 0.99;

// const canBuyChocolate = amountInCash >= priceOfChocolate;
// console.log(canBuyChocolate);

// if (canBuyChocolate) {
//     console.log('Enjoy your purchase!');
// } else {
//     console.log('Sorry, you do not have enough money.')
// }

// let hour = 16;

// if (hour >= 6 && hour <= 12) 
//     console.log('Serving breakfast.');
// else if (hour > 12 && hour <= 14) 
//     console.log('Serving lunch');
// else 
//     console.log('Serving dinner');


let job = 'Sales engineer';

// if (job === 'Software Developer') {
//     console.log('Writes code');
// } else if (job === 'Cloud Architect') {
//     console.log('manages and deploys cloud resources');
// } else if (job === 'Designer') {
//     console.log('Manages user interface documents');
// } else {
//     console.log('Works directly with customers');
// }

switch (job) {
    case 'Software Developer':
        console.log('Writes code');
        break;
    case 'Cloud Engineer':
        console.log('Manages and deploys cloud resourses');
        break;
    case 'Designer':
        console.log('Manages User Interface documents');
        break;
    default:
        console.log('Works directly with customers');
}
