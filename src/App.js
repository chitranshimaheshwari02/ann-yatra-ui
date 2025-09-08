// import React from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import FeaturesSection from "./components/FeaturesSection";
// import HowItWorks from "./components/HowItWorks";
// import Stakeholders from "./components/Stakeholders";
// import DashboardSection from "./components/DashboardSection";

// import "./styles/HeroSection.scss";
// import "./styles/Navbar.scss";
// import "./styles/FeaturesSection.scss";
// import "./styles/HowItWorks.scss";
// import "./styles/Stakeholders.scss";
// import "./styles/DashboardSection.scss";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <HeroSection />
//       <FeaturesSection />
//       <HowItWorks />
//       <Stakeholders />
//       <DashboardSection />
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import Stakeholders from "./components/Stakeholders";
import DashboardSection from "./components/DashboardSection";
import SignIn from "./components/SignIn";

import "./styles/HeroSection.scss";
import "./styles/Navbar.scss";
import "./styles/FeaturesSection.scss";
import "./styles/HowItWorks.scss";
import "./styles/Stakeholders.scss";
import "./styles/DashboardSection.scss";
import "./styles/SignIn.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Landing Page - shows everything */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturesSection />
              <HowItWorks />
              <Stakeholders />
              <DashboardSection />
            </>
          }
        />

        {/* Separate pages */}
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/stakeholders" element={<Stakeholders />} />
        <Route path="/dashboard" element={<DashboardSection />} />
         <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
