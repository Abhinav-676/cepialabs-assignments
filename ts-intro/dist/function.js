/**
    ✅ 5. Function — Questions
     
    1. Create a function that takes two numbers and returns their sum.
    
    
    2. Create a function that returns a person’s full name.
    
    
    3. Create a function that finds the largest number in an array.
 */
function sum(a, b) {
    return a + b;
}
console.log("Sum of 2 + 3 is ".concat(sum(2, 3)));
var person = {
    firstName: "Mohan",
    lastName: "Kumar"
};
function fullName(p) {
    return p.firstName + p.lastName;
}
console.log(fullName(person));
var arr = [1, 2, 3, 4, 5];
function findLargest(arr) {
    return arr.reduce(function (r, x) {
        if (x > r) {
            return x;
        }
        return r;
    });
}
console.log("largest in ".concat(arr, " is ").concat(findLargest(arr)));
