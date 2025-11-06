
let users = [
  { id: 1, name: "Amit", country: "India", premium: true },
  { id: 2, name: "John", country: "USA", premium: false },
  { id: 3, name: "Riya", country: "India", premium: true },
  { id: 4, country: "Germany", premium: false }, // missing name intentionally
  { id: 5, name: "Neha", country: "India", premium: false },
];

let products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "E-book", category: "Digital", price: 15 },
  { id: 3, category: "Fashion", price: 200 }, // missing name
  { id: 4, name: "Headphones", category: "Electronics", price: 120 },
  { id: 5, name: "Course", category: "Digital", price: 50 },
];

let orders = [
  { orderId: 1, userId: 1, productId: 1, quantity: 2 },
  { orderId: 2, userId: 2, productId: 2, quantity: 1 },
  { orderId: 3, userId: 1, productId: 4, quantity: 3 },
  { orderId: 4, userId: 5, productId: 5, quantity: 4 },
  { orderId: 5, userId: 3, productId: 3, quantity: 2 },
  { orderId: 6, userId: 9, productId: 2, quantity: 1 }, // invalid user
];

// cleaning users data
users = users.map((item) => {
    const id = item.id
    const name = item.name ? item.name : "Unknown"
    const country = item.country ? item.country : "Unkmown"
    const premium = item.premium ? item.premium : "Unknown"

    return {id, name, country, premium}
})

// cleaning products data
products = products.map((item) => {
  const id = item.id
  const name = item.name ? item.name : "Unknown"
  const category = item.category ? item.category : "Unknown"
  const price = item.price ? item.price : 0

  return {id, name, category, price}
})


const total_revenue = orders.reduce((acc, order) => {
    const product = products.find(item => item.id == order.productId)
    if (!product) {
        return acc
    }
    return acc + product.price * order.quantity
}, 0);

console.log()
console.log("Total Revenue:", total_revenue)
console.log()

const items_sold = orders.reduce((acc, orders) => {
    return acc + orders.quantity
}, 0);

console.log("Total Items Sold:", items_sold)
console.log()

const revenue_by_country = orders.reduce((acc, order) => {
    const user = users.find((item) => item.id == order.orderId)
    if (!user) {
        return acc
    }
    const product = products.find(item => item.id == order.productId)
    if (!product) {
        return acc
    }
    if (!acc[user.country]) {
        acc[user.country] = 0
    }
    acc[user.country] = acc[user.country] + product.price * order.quantity
    return acc
}, {})

console.log("Revenue by Country:", revenue_by_country)
console.log()

const user_spends = orders.reduce((acc, order) => {
    const user = users.find((item) => item.id == order.orderId)
    if (!user) {
        return acc
    }
    const product = products.find(item => item.id == order.productId)
    if (!product) {
        return acc
    }
    if (!acc[user.id]) {
        acc[user.id] = 0
    }
    acc[user.id] = acc[user.id] + product.price * order.quantity
    return acc
}, {})

const highest_user = Object.entries(user_spends).reduce((highest, current) => {
    if (current[1] > highest[1]) {
        return current; 
    } else {
        return highest; 
    }
}); 

console.log("Top Spending UserId:", highest_user[0], "Spending", highest_user[1])
console.log()

const prodcuct_sold = orders.reduce((acc, order) => {
    const product = products.find(item => item.id == order.productId)
    if (!product) {
        return acc
    }
    if (!acc[product.id]) {
        acc[product.id] = 0
    }
    acc[product.id] = acc[product.id] + order.quantity
    return acc
}, {})

const most_sold_product = Object.entries(prodcuct_sold).reduce((most, current) => {
    if (current[1] > most[1]) {
        return current; 
    } else {
        return most; 
    }
})

console.log("Most Sold ProductId:", most_sold_product[0], "Selling", most_sold_product[1])
console.log()

const details = products.map(product => {

    const product_name = product.name
    const product_category = product.category
    const product_price = product.price * 1.1

    return {
        name: product_name,
        category: product_category,
        price: product_price
    }
})


console.log("Product Details", details)
console.log()

