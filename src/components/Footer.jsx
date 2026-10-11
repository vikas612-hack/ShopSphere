import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2>ShopSphere</h2>
          <p>Your one-stop destination for online shopping.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShopSphere. Built with React.js.</p>
      </div>
    </footer>
  );
};

export default Footer;