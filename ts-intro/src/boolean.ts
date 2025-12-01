/**
    ✅ 3. Boolean — Questions
     
    1. Create a boolean variable isLoggedIn, toggle its value, and print both values.
    
    
    2. Given an age variable, check if the user is an adult (age >= 18).
    
    
    3. Given a password string, check if it is strong (length > 8).
 */

let isLoggedIn: boolean = false
console.log("Initial login value:", isLoggedIn)
isLoggedIn = true
console.log("Toggled login value:", isLoggedIn)

const age: number = 56
function checkAdult(age: number): boolean {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
console.log(`${age} is ${checkAdult(age) ? "adult" : "not adult"}`)

const password: string = "123"
function validatePass(pass: string): boolean {
    if (pass.length > 8) {
        return true
    } else {
        return false
    }
}
console.log(`${password} is a ${validatePass(password) ? "valid" : "invalid"} password.`)

