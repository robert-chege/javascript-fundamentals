// Implement a function to accept a number. Then return "FizzBuzz" if divisible by 3 and 5
// or return "Fizz" if only dividible by 3 
// or return "Buzz" if only divisible by 5
// or return the original number if not divisible by 3 or 5

function div3Or5(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
}

console.log(div3Or5(15));