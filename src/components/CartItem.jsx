import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="cart-item">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="cart-item-image"
      />

      <div className="cart-item-info">
        <h3>{item.title}</h3>

        <p>${item.price}</p>

        <div className="quantity-controls">
          <button onClick={() => decreaseQuantity(item.id)}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => increaseQuantity(item.id)}>
            +
          </button>
        </div>

        <button
          className="remove-button"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>

      <p className="item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
};

export default CartItem;