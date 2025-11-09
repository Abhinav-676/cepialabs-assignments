import React from 'react'

export default function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div>
        <div className="item-name">{item.name}</div>
        <div className="item-meta">${item.price} × {item.quantity}</div>
      </div>
      <button className="remove" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  )
}
