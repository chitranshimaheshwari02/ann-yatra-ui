import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import Stakeholders from "./components/Stakeholders";
import DashboardSection from "./components/DashboardSection";

import "./styles/HeroSection.scss";
import "./styles/Navbar.scss";
import "./styles/FeaturesSection.scss";
import "./styles/HowItWorks.scss";
import "./styles/Stakeholders.scss";
import "./styles/DashboardSection.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Stakeholders />
      <DashboardSection />
    </div>
  );
}

export default App;

