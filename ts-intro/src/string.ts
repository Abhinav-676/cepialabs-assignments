/*
    ✅ 2. String — Questions
    
    1. Create a string variable username and print it in the console.
    
    
    2. Convert a string to uppercase ("hello" → "HELLO").
    
    
    3. Using template literals, print a message:
    "Hello, my name is ___ and I am ___ years old."
*/ 

const username: string = "John888"
console.log(username)

const upper: string = username.toUpperCase()
console.log(username, "->", upper)

const personName: string = "Abhinav"
const personAge: string = "22"
console.log(`Hello, my name is ${personName} and I am ${personAge} years old.`)