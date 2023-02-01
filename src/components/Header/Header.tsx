import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCart from "../Cart/ShoppingCart";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={`/`}>
          <div className="store-button">Store</div>
        </Link>
        <Link to={`/about`}>
          <div className="about-button">About</div>
        </Link>
        <Link to={`/about`}>
          <div className="account-button">Account</div>
        </Link>
      </nav>
      <ShoppingCart />
    </header>
  );
};

export default Header;
