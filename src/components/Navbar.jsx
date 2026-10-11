import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        ShopSphere
      </NavLink>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Cart ({totalItems})
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;