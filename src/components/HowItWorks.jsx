import React from "react";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <span>1</span>
          <p>Farmers upload crop data to the blockchain.</p>
        </div>
        <div className="step">
          <span>2</span>
          <p>Distributors verify and transport securely.</p>
        </div>
        <div className="step">
          <span>3</span>
          <p>Consumers view verified product history.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
