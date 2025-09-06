export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
        <span>अन्नYatra</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how">How it Works</a></li>
        <li><a href="#stakeholders">For Stakeholders</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
      </ul>

      <div className="navbar-actions">
        <button className="sign-in">Sign In</button>
        <button className="get-started">Get Started</button>
      </div>
    </nav>
  );
}

