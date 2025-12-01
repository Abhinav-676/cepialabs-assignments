/*
    Number — Questions
    
    1. Create a variable price of type number and assign any value.
    
    
    2. Write TypeScript code to calculate the sum of two numbers.
    
    
    3. Create a number variable and check whether it is even or odd.
*/
var num = 34;
console.log(num);
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
function evenOdd(x) {
    if (x % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("odd");
    }
}
evenOdd(23);
