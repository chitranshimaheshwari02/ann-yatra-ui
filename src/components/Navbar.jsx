import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/" className="logo-link">अन्नYatra</Link>
      </div>


      <ul className="nav-links">
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/how-it-works">How it Works</Link></li>
        <li><Link to="/stakeholders">For Stakeholders</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>


      <div className="nav-buttons">
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
        <Link to="/get-started">
          <button>Get Started</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
