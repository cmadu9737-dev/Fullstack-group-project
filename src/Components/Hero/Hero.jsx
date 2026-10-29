
import "./Hero.css";
import technicianImage from "../../assets/technician.jpg";
import beautyImage from "../../assets/beauty.jpg";
import techImage from "../../assets/tech.jpg";
import chefImage from "../../assets/chef.jpg";

function Hero() {
  return (
    <section className="hero">
      {/* Left side: Hero text */}
      <div className="hero-content">
        <p className="hero-label">WELCOME TO SERVEHUB</p>

        <h1>
          Find Trusted Local Experts for <span>Any Service</span>
        </h1>

        <p className="hero-description">
          Connect with skilled professionals near you for reliable,
          convenient, and quality services.
        </p>

        {/* Action buttons */}
        <div className="hero-buttons">
          <a href="#services" className="hero-button primary">
            Find a Service <span aria-hidden="true">→</span>
          </a>

          <a
            href="#become-provider"
            className="hero-button secondary"
          >
            Become a Provider
          </a>
        </div>

        {/* Trust features */}
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-icon verified" aria-hidden="true">
              ✓
            </span>
            <p>
              Verified
              <br />
              Professionals
            </p>
          </div>

          <div className="trust-item">
            <span className="trust-icon quality" aria-hidden="true">
              ☆
            </span>
            <p>
              Quality
              <br />
              Services
            </p>
          </div>

          <div className="trust-item">
            <span className="trust-icon local" aria-hidden="true">
              ⌖
            </span>
            <p>
              Local
              <br />
              &amp; Reliable
            </p>
          </div>
        </div>
      </div>

      {/* Right side: Four service-provider images */}
      <div className="hero-images">
        <div className="hero-image-card">
          <img
            src={technicianImage}
            alt="Professional technician providing home services"
          />
          <span>
            <span aria-hidden="true">⌂</span> Home Services
          </span>
        </div>

        <div className="hero-image-card">
          <img
            src={beautyImage}
            alt="Beauty professional working in a salon"
          />
          <span>
            <span aria-hidden="true">✂</span> Beauty &amp; Wellness
          </span>
        </div>

        <div className="hero-image-card">
          <img
            src={techImage}
            alt="Technology professional working on a laptop"
          />
          <span>
            <span aria-hidden="true">▣</span> Tech &amp; Creative
          </span>
        </div>

        <div className="hero-image-card">
          <img
            src={chefImage}
            alt="Professional chef in a restaurant kitchen"
          />
          <span>
            <span aria-hidden="true">♨</span> Food &amp; Catering
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
