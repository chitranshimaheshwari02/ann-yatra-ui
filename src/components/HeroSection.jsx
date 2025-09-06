import React from "react";
// import bgFarm from "../public/bg-farm.jpg";

const HeroSection = () => {
  return (
    <section className="hero">
      <nav className="navbar">
        <div className="logo">
          {/* <img src="/logo.png" alt="Logo" /> */}
          {/* <span>अन्नYatra</span> */}
        </div>
        <ul className="nav-links">
          {/* <li>Features</li> */}
          {/* <li>How it Works</li> */}
          {/* <li>For Stakeholders</li>
          <li>Dashboard</li> */}
        </ul>
        <div className="auth-buttons">
          {/* <button className="sign-in">Sign In</button>
          <button className="get-started">Get Started</button> */}
        </div>
      </nav>

      <div className="hero-content">
        <p className="hackathon">Smart India Hackathon 2025</p>
        <h1>Blockchain-Powered Agricultural Transparency</h1>
        <p className="subtitle">
          Track every step from farm to table. Ensure fair pricing, verify
          quality, and build trust in the agricultural supply chain with our
          revolutionary blockchain platform.
        </p>
        <div className="cta-buttons">
          <button className="primary">Start Tracking Produce</button>
          <button className="secondary">View Demo Dashboard</button>
        </div>

        <div className="features">
          <div>
            <img src="/icons/track.png" alt="tracking" />
            <p><strong>100%</strong><br/>Transparent Tracking</p>
          </div>
          <div>
            <img src="/icons/realtime.png" alt="real-time" />
            <p><strong>Real-time</strong><br/>Supply Chain Updates</p>
          </div>
          <div>
            <img src="/icons/multi.png" alt="multi-stakeholder" />
            <p><strong>Multi-stakeholder</strong><br/>Platform Access</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
