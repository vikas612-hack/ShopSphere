import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, totalItems, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <p>
            Total Items: <strong>{totalItems}</strong>
          </p>

          <p>
            Subtotal: <strong>${subtotal.toFixed(2)}</strong>
          </p>

          <button>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;