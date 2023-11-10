import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="imgNav">
        <img src="https://seeklogo.com/images/M/medium-logo-F0ACFCCD58-seeklogo.com.png" />
      </div>
      <div className="inputNav">
        <input type="search" placeholder="Search" />
      </div>
      <div className="iconsnav">
        <Link to="/">Home</Link>
        <Link to="create">Publica</Link>
        <Link to="login">Inicia Sesión</Link>
      </div>
    </nav>
  );
}
