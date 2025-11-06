 * Assignment-
 
const users = [
  { id: 1, name: "Amit", country: "India", premium: true },
  { id: 2, name: "John", country: "USA", premium: false },
  { id: 3, name: "Riya", country: "India", premium: true },
  { id: 4, country: "Germany", premium: false }, // missing name intentionally
  { id: 5, name: "Neha", country: "India", premium: false },
];
 
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "E-book", category: "Digital", price: 15 },
  { id: 3, category: "Fashion", price: 200 }, // missing name
  { id: 4, name: "Headphones", category: "Electronics", price: 120 },
  { id: 5, name: "Course", category: "Digital", price: 50 },
];
 
const orders = [
  { orderId: 1, userId: 1, productId: 1, quantity: 2 },
  { orderId: 2, userId: 2, productId: 2, quantity: 1 },
  { orderId: 3, userId: 1, productId: 4, quantity: 3 },
  { orderId: 4, userId: 5, productId: 5, quantity: 4 },
  { orderId: 5, userId: 3, productId: 3, quantity: 2 },
  { orderId: 6, userId: 9, productId: 2, quantity: 1 }, // invalid user
];
 
 
This data is intentionally imperfect — some users and products are missing names, and some orders are invalid. You must clean and process it before generating analytics
 
 
 
Step-2
----------------
 
Compute using .reduce():
 
1. Total revenue.
 
 
2. Total items sold.
 
 
3. Revenue by country.
 
 
4. Top spending user.
 
 
5. Most sold product.
 
 
6. Average order value.
 
 
 
Step-3
__________
Use .map() to return a new array of objects containing:
 
The product name (if missing, show "Unknown"),
 
The category,
 
The price including 10% GST (price * 1.1).
 
 
The file name must be the name of data_analytics.js