// implement a function to accept two numbers and returns the maximum number
//  function max(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
//  }

function maxNum(num1, num2) {
    return num1 >= num2 ? num1 : num2;
}
console.log(maxNum(7,2));