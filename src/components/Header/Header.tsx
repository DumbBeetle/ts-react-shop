import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={`/`}>
          <div>Home</div>
        </Link>
        <Link to={`/about`}>
          <div>About</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
