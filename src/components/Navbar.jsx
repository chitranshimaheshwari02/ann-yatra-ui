// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src="/logo.png" alt="Logo" />
//         <span>अन्नYatra</span>
//       </div>

//       <ul className="navbar-links">
//         <li><a href="#features">Features</a></li>
//         <li><a href="#how">How it Works</a></li>
//         <li><a href="#stakeholders">For Stakeholders</a></li>
//         <li><a href="#dashboard">Dashboard</a></li>
//       </ul>

//       <div className="navbar-actions">
//         <button className="sign-in">Sign In</button>
//         <button className="get-started">Get Started</button>
//       </div>
//     </nav>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.scss";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">अन्नYatra</div>
//       <ul>
//         <li><Link to="/features">Features</Link></li>
//         <li><Link to="/how-it-works">How it Works</Link></li>
//         <li><Link to="/stakeholders">For Stakeholders</Link></li>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//       </ul>
//       <div className="auth-buttons">
//         <button>Sign In</button>
//         <button className="get-started">Get Started</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.scss";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">अन्नYatra</div>

//       {/* Links */}
//       <ul className="nav-links">
//         <li><Link to="/features">Features</Link></li>
//         <li><Link to="/how-it-works">How it Works</Link></li>
//         <li><Link to="/stakeholders">For Stakeholders</Link></li>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//       </ul>

//       {/* Buttons */}
//       <div className="nav-buttons">
//         <button>Sign In</button>
//         <button>Get Started</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" className="logo-link">अन्नYatra</Link>
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/how-it-works">How it Works</Link></li>
        <li><Link to="/stakeholders">For Stakeholders</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>

      {/* Buttons */}
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
