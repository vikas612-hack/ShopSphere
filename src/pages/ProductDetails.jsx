import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <main className="product-details">
      <button onClick={() => navigate("/products")}>
        ← Back to Products
      </button>

      <div className="details-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="details-image"
        />

        <div className="details-info">
          <p className="product-category">
            {product.category}
          </p>

          <h1>{product.title}</h1>

          <p className="product-rating">
            ⭐ {product.rating}
          </p>

          <h2>${product.price}</h2>

          <p>{product.description}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;