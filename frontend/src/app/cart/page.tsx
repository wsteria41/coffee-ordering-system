"use client";

import { useCart } from "../../../context/CartContext";

interface CartItem {
  name: string;
  price: number;
}

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div style={{ padding: "30px" }}>
      <h1>Your Order</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((item: CartItem, index: number) => (
            <li
              key={index}
              style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid #ccc",
                borderRadius: "10px",
              }}
            >
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>

              <button
                onClick={() => removeFromCart(index)}
                style={{
                  background: "brown",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "6px",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
