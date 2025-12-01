/*
    ✅ 4. Object — Questions
    
    1. Create a user object with fields: name, age, isActive.
    
    
    2. Create a product object and print the product’s price.
    
    
    3. Add a new field (e.g., email) to an existing object.
*/
var user = {
    name: "Mohit",
    age: 23,
    isActive: true
};
console.log(user);
var product = {
    name: "Rice",
    price: 84
};
console.log("".concat(product.name, " is priced at ").concat(product.price));
var newUser = {
    name: "Raghav",
    age: 24,
    isActive: true,
    email: "raghav@gmail.com"
};
console.log(newUser);
