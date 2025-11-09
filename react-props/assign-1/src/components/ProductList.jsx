import React from 'react'

export default function ProductList({ products, onAdd }) {
  return (
    <div className="product-list">
      {products.map((p) => (
        <div key={p.id} className="product">
          <div>
            <strong>{p.name}</strong>
            <div className="price" style={{color: "white"}}>${p.price}</div>
          </div>
          <button onClick={() => onAdd(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}
