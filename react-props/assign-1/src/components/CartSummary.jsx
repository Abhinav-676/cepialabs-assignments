import React from 'react'

export default function CartSummary({ total, count }) {
  return (
    <div className="cart-summary">
      <hr />
      <div>Items: {count}</div>
      <div>Total: ${total}</div>
    </div>
  )
}
