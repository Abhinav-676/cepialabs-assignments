/**
     ✅ 6. Array — Questions
     
    1. Create an array of strings: ["Apple", "Banana", "Mango"] and print each item.
    
    
    2. Add a new fruit to the array and print the updated array.
    
    
    3. Create an array of numbers and find the maximum number.
 */
var fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(function (x) {
    console.log(x);
});
fruits.push("Papaya");
console.log("updated Array:");
fruits.forEach(function (x) {
    console.log(x);
});
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
