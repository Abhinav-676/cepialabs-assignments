/*
    ✅ 4. Object — Questions
    
    1. Create a user object with fields: name, age, isActive.
    
    
    2. Create a product object and print the product’s price.
    
    
    3. Add a new field (e.g., email) to an existing object.
*/

type User = {
    name: string,
    age: number,
    isActive: boolean
}

const user: User = {
    name: "Mohit",
    age: 23,
    isActive: true
}
console.log(user)

const product: {
    name: string,
    price: number
} = {
    name: "Rice",
    price: 84
}
console.log(`${product.name} is priced at ${product.price}`)

type UserExtended = User & {
    email: string
}
const newUser: UserExtended = {
    name: "Raghav",
    age: 24,
    isActive: true,
    email: "raghav@gmail.com"
}
console.log(newUser)