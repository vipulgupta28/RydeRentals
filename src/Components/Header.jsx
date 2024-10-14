import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>Ryde</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/addcar">Add Car</Link>
          </li>
          <li>
            <Link to="/login">Login/Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
