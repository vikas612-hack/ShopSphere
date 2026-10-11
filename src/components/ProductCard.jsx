import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <div className="product-info">
        <p className="product-category">
          {product.category}
        </p>

        <h3 className="product-title">
          {product.title}
        </h3>

        <p className="product-rating">
          ⭐ {product.rating}
        </p>

        <div className="product-bottom">
          <span className="product-price">
            ${product.price}
          </span>

          <button onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;