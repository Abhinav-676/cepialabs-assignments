/**
    ✅ 3. Boolean — Questions
     
    1. Create a boolean variable isLoggedIn, toggle its value, and print both values.
    
    
    2. Given an age variable, check if the user is an adult (age >= 18).
    
    
    3. Given a password string, check if it is strong (length > 8).
 */
var isLoggedIn = false;
console.log("Initial login value:", isLoggedIn);
isLoggedIn = true;
console.log("Toggled login value:", isLoggedIn);
var age = 56;
function checkAdult(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log("".concat(age, " is ").concat(checkAdult(age) ? "adult" : "not adult"));
var password = "123";
function validatePass(pass) {
    if (pass.length > 8) {
        return true;
    }
    else {
        return false;
    }
}
console.log("".concat(password, " is a ").concat(validatePass(password) ? "valid" : "invalid", " password."));
