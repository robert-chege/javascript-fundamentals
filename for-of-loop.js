 let numbers = [1, 2, 3, 4, 5];

// // for (let idx = 0; idx < numbers.length; idx++) {
// //     console.log(numbers[idx]);
// // }

// for (let element of numbers) {
//     console.log(element);
// }

// break staments
// for(let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }

//     console.log(i)
// }

// let i = 0
// while (i < 10) {
//     if (i === 5)
//         break;

//     console.log(i);
//     i++;
// }

// do {
//     if (i === 5)
//         break;

//     console.log(i);
//     i++;
// } while (i < 10)

// let card = {a:1, b:2, c:3}
// for (let key in card) {
//     if (card[key] === 2)
//         break

//     console.log(card[key]);
// }

// for (let el of numbers) {
//     if (el === 3)
//         break;

//     console.log(el);
// }


// CONTINUE

// for (let i = 0; i <= 10; i++) {
//     if ( i % 2 === 0)
//         continue;

//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     i++;
//     if ( i % 2 === 0)
//         continue;

//     console.log(i);
// }

// let i = 0;
// do {
//     i++;
//     if (i % 2 === 0)
//         continue;

//     console.log(i);
// } while ( i < 10)

// const obj = {a: 1, b: 2, c: 3, d: 4}
// for (let key in obj) {
//     if (obj[key] % 2 === 0)
//         continue;

//     console.log(obj[key]);
// }

for (let el of numbers) {
    if (el % 2 === 0)
        continue;

    console.log(el);
}

