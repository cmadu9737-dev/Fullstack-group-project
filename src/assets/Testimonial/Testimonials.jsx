import React from "react";
import { Quote, MapPin, Star, ArrowRight } from "lucide-react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        {/* Section Heading */}
        <div className="testimonials-heading">
          <div>
            <h2>What Our Customers Say</h2>

            <p>
              Real people. Real experiences. Trusted by thousands.
            </p>
          </div>

          <a href="#all-reviews" className="view-reviews">
            View more reviews
            <ArrowRight size={18} strokeWidth={2} />
          </a>
        </div>

        {/* Customer Reviews */}
        <div className="testimonials-grid">

          {/* First Customer */}
          <div className="testimonial-card">

            <Quote
              className="quote-icon"
              size={30}
              strokeWidth={2}
            />

            <p className="customer-review">
              ServeHub helped me find a reliable plumber the
              same day. Excellent service and transparent pricing!
            </p>

            <div className="customer-details">

              <div className="customer-info">

                <img
                  src="/images/test.jpeg"
                  alt="Chinedu O."
                  className="customer-image"
                />

                <div>
                  <h3>Chinedu O.</h3>

                  <p className="customer-location">
                    <MapPin size={14} />
                    Lagos, Lagos
                  </p>
                </div>

              </div>

              <div className="customer-rating" aria-label="5 out of 5 stars">
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
              </div>

            </div>
          </div>

          {/* Second Customer */}
          <div className="testimonial-card">

            <Quote
              className="quote-icon"
              size={30}
              strokeWidth={2}
            />

            <p className="customer-review">
              As a provider, I've gotten consistent clients and
              grown my business. The platform is easy to use.
            </p>

            <div className="customer-details">

              <div className="customer-info">

                <img
                  src="/images/testim.jpeg"
                  alt="Funke Adebayo"
                  className="customer-image"
                />

                <div>
                  <h3>Funke Adebayo</h3>

                  <p className="customer-location">
                    <MapPin size={14} />
                    Ibadan, Oyo
                  </p>
                </div>

              </div>

              <div className="customer-rating" aria-label="5 out of 5 stars">
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
              </div>

            </div>
          </div>

          {/* Third Customer */}
          <div className="testimonial-card">

            <Quote
              className="quote-icon"
              size={30}
              strokeWidth={2}
            />

            <p className="customer-review">
              Verified professionals, secure payments and real
              support. ServeHub is a game changer!
            </p>

            <div className="customer-details">

              <div className="customer-info">

                <img
                  src="/images/testy.jpeg"
                  alt="Musa Bala"
                  className="customer-image"
                />

                <div>
                  <h3>Musa Bala</h3>

                  <p className="customer-location">
                    <MapPin size={14} />
                    Kano, Kano
                  </p>
                </div>

              </div>

              <div className="customer-rating" aria-label="5 out of 5 stars">
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;