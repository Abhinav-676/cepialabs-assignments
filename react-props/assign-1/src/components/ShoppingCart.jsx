import React, { useState } from 'react'
import ProductList from './ProductList'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import '../App.css'

const sampleProducts = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 599 },
  { id: 3, name: 'Headphones', price: 199 },
]

export default function ShoppingCart() {
  const [cart, setCart] = useState([]) // array of { id, name, price, quantity }

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id)
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((p) => p.id !== productId))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="shopping-container">
      <div className="products">
        <h2>Products</h2>
        <ProductList products={sampleProducts} onAdd={addToCart} />
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 && <p>Your cart is empty.</p>}
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
        ))}
        <CartSummary total={total} count={itemCount} />
      </div>
    </div>
  )
}
