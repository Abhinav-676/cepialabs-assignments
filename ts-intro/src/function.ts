/**
    ✅ 5. Function — Questions
     
    1. Create a function that takes two numbers and returns their sum.
    
    
    2. Create a function that returns a person’s full name.
    
    
    3. Create a function that finds the largest number in an array.
 */


function sum(a: number, b: number): number {
    return a + b
}
console.log(`Sum of 2 + 3 is ${sum(2, 3)}`)

type Person = {
    firstName: string,
    lastName: string
}
const person: Person = {
    firstName: "Mohan",
    lastName: "Kumar"
}
function fullName(p: Person): string {
    return p.firstName + p.lastName
}
console.log(fullName(person))

const arr: number[] = [1,2,3,4,5]
function findLargest(arr: number[]): number {
    return arr.reduce((r, x) => {
        if (x > r) {
            return x
        }

        return r
    })
}
console.log(`largest in ${arr} is ${findLargest(arr)}`)