// import React from "react";

// const FeaturesSection = () => {
//   return (
//     <section className="features-section">
//       <h2>Features</h2>
//       <div className="features-grid">
//         <div className="feature-card">
//           <h3>Blockchain Transparency</h3>
//           <p>Track every step of the supply chain securely.</p>
//         </div>
//         <div className="feature-card">
//           <h3>Real-time Updates</h3>
//           <p>Instant updates from farm to table.</p>
//         </div>
//         <div className="feature-card">
//           <h3>Multi-Stakeholder Access</h3>
//           <p>Farmers, buyers, and distributors on one platform.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

import React from "react";
import { FaSearch, FaClock, FaUsers } from "react-icons/fa";
// import "./FeaturesSection.scss"; // optional SCSS styles

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="section-title">Features</h2>

      <div className="features-grid">
        <div className="feature-card">
          <FaSearch size={40} className="icon" />
          <h3>Blockchain Transparency</h3>
          <p>Track every step of the supply chain securely.</p>
        </div>

        <div className="feature-card">
          <FaClock size={40} className="icon" />
          <h3>Real-time Updates</h3>
          <p>Instant updates from farm to table.</p>
        </div>

        <div className="feature-card">
          <FaUsers size={40} className="icon" />
          <h3>Multi-Stakeholder Access</h3>
          <p>Farmers, buyers, and distributors on one platform.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
