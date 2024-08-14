// Implement 2 functions. 
// For the first funciton, have it accept an array as parameter which
// contains a list of numbers. Then console log the even numbers in the array.

// For the second fucntion, have it accept an array and log the odd numbers.

let nums = [];
for (let i = 1; i <= 20; i++) {
    nums.push(i);
}


console.log('Even Numbers:')
function displayEvenNumbers(array) {
    for(const num of array){
        if (num % 2 === 0)
            console.log(num);
    }
}

displayEvenNumbers(nums);


console.log('Odd numbers:')
function displayOddNumbers(array) {
    for (let num of array) {
        if (num % 2 != 1)
            console.log(num);
    }
}

displayOddNumbers(nums);

