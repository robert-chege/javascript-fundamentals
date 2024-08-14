const dog = {
    name: 'Max',
    breed: 'Dachshund',
    age: 5,
    weightInPounds: 12,
    eat: function() {
        console.log('Chomp!');
    },
    bark() {
        console.log('Woof!');
    }
}

// const anotherDog = {
//     name: 'Marley',
//     breed: 'chiuaua',
//     age: 5,
//     weightInPounds: 12,
//     eat: function() {
//         console.log('Chomp!');
//     },
//     bark() {
//         console.log('Woof!');
//     }
// }

function getDog(name, breed, age, weightInPounds) {
    return {
        name,
        breed,
        age,
        weightInPounds,
        eat() {
            console.log('Chomp!');
        },
        bark() {
            console.log('Woof!');
        }
    }
}

const anotherDog = getDog('Marley', 'Chocolate Lab', 7, 12)
console.log(anotherDog);