import React from "react";
import { Search, Handshake, ShieldCheck } from "lucide-react";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-container">

        <div className="how-heading">
          <h2>How It Works</h2>
          <p>Get your service done in 3 simple steps</p>
        </div>

        <div className="how-steps">

          {/* First Step */}
          <div className="how-card">
            <div className="how-card-top">
              <span className="step-number">1</span>

              <div className="step-icon">
                <Search size={30} strokeWidth={2} />
              </div>
            </div>

            <h3>Search</h3>

            <p>
              Find the service you need and browse trusted
              professionals near you.
            </p>
          </div>

          <div className="step-arrow">→</div>

          {/* Second Step */}
          <div className="how-card">
            <div className="how-card-top">
              <span className="step-number">2</span>

              <div className="step-icon">
                <Handshake size={30} strokeWidth={2} />
              </div>
            </div>

            <h3>Connect</h3>

            <p>
              Compare providers, read reviews, and choose
              the best fit.
            </p>
          </div>

          <div className="step-arrow">→</div>

          {/* Third Step */}
          <div className="how-card">
            <div className="how-card-top">
              <span className="step-number">3</span>

              <div className="step-icon">
                <ShieldCheck size={30} strokeWidth={2} />
              </div>
            </div>

            <h3>Get It Done</h3>

            <p>
              Book the service, confirm details, and get
              the job done with confidence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;