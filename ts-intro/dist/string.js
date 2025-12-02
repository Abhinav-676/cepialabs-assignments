/*
    ✅ 2. String — Questions
    
    1. Create a string variable username and print it in the console.
    
    
    2. Convert a string to uppercase ("hello" → "HELLO").
    
    
    3. Using template literals, print a message:
    "Hello, my name is ___ and I am ___ years old."
*/
var username = "John888";
console.log(username);
var upper = username.toUpperCase();
console.log(username, "->", upper);
var personName = "Abhinav";
var personAge = "22";
console.log("Hello, my name is ".concat(personName, " and I am ").concat(personAge, " years old."));
