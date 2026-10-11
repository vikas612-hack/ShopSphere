import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">WELCOME TO SHOPSPHERE</p>

          <h1>
            Everything You Need,
            <br />
            All in One Place.
          </h1>

          <p className="hero-description">
            Discover quality products, explore categories,
            and enjoy a simple and convenient shopping experience.
          </p>

          <Link to="/products" className="shop-button">
            Shop Now →
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🛍️</div>
          <h2>Wide Selection</h2>
          <p>
            Explore products across multiple categories
            in one convenient place.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔎</div>
          <h2>Easy Shopping</h2>
          <p>
            Search, filter and sort products to quickly
            find what you need.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🛒</div>
          <h2>Smart Cart</h2>
          <p>
            Easily manage quantities and keep your cart
            saved even after refreshing the page.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;