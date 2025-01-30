import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo"><Link to="/">VEGA INNOVATIONS</Link></h1>
      <nav className="nav">
        
        <Link to="/models">Models</Link>
        <Link to="/dealer">Dealerships</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
