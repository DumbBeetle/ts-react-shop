import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCart from "../Cart/ShoppingCart";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={`/`}>
          <div className="store-button"></div>
        </Link>
        <Link to={`/about`}>
          <div className="about-button"></div>
        </Link>
        <Link to={`/about`}>
          <div className="account-button"></div>
        </Link>
      </nav>
      <ShoppingCart />
    </header>
  );
};

export default Header;
